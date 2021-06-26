import {
    Environment,
    Network,
    QueryResponseCache,
    RecordSource,
    Store,
} from 'relay-runtime';
import fetch from 'isomorphic-unfetch';
import { sessionService } from 'redux-react-session';

const oneMinute = 60 * 1000;
const cache = new QueryResponseCache({ size: 250, ttl: oneMinute });
let environment = null;

async function fetchQuery(operation, variables = {}, cacheConfig) {
    const queryID = operation.text;
    const isMutation = operation.operationKind === 'mutation';
    const isQuery = operation.operationKind === 'query';
    const forceFetch = cacheConfig && cacheConfig.force;
    const fromCache = cache.get(queryID, variables);
    const session = await sessionService.loadSession().catch((_) => {
        return {};
    });

    if (isQuery && fromCache !== null && !forceFetch) {
        return fromCache;
    }

    return fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + session.token,
            recaptcha: localStorage.getItem('captcha'),
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            if (isQuery && json) {
                cache.set(queryID, variables, json);
            }
            if (isMutation) {
                cache.clear();
            }

            return json;
        });
}

export const initEnvironment = ({ records = {} } = {}) => {
    const network = Network.create(fetchQuery);
    const store = new Store(new RecordSource(records));

    if (!process.browser) {
        return new Environment({
            network,
            store,
        });
    }

    if (!environment) {
        environment = new Environment({
            network,
            store,
        });
    }

    return environment;
};