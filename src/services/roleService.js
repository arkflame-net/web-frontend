import { commitMutation } from 'react-relay'; 
import { initEnvironment } from '../relay/environment';

import { createRoleMutation } from "../graphql";

const environment = initEnvironment();

export const createRole  = (name, color, background, permissions) => {
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation: createRoleMutation,
            variables: {
                payload: {name, color, background, permissions}
            },
            onCompleted: resolve,
            onError: reject,
        });
    });
} 
 
