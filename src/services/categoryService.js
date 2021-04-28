import { commitMutation } from 'react-relay'; 
import { initEnvironment } from '../relay/environment';

import { createCategoryMutation } from "../graphql";

const environment = initEnvironment();

export const createCategory = (name, description, shrug) => {
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation: createCategoryMutation,
            variables: {
                payload: { name, description, shrug }
            },
            onCompleted: resolve,
            onError: reject,
        });
    });
}