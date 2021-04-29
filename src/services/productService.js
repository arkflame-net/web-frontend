import { commitMutation } from 'react-relay'; 
import { initEnvironment } from '../relay/environment';

import { createProductMutation } from "../graphql";

const environment = initEnvironment();

export const createProduct  = (name, description, brief, category, price, commands) => {
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation: createProductMutation,
            variables: {
                payload: {name, description, brief, category, price, commands}
            },
            onCompleted: resolve,
            onError: reject,
        });
    });
}