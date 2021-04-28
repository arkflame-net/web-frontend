import { commitMutation } from 'react-relay'; 
import { initEnvironment } from '../relay/environment';

import { createPurchaseMutation } from "../graphql";

const environment = initEnvironment();

export const confirmPayment  = (username, method, items) => {
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation: createPurchaseMutation,
            variables: {
                payload: {username, method, items}
            },
            onCompleted: resolve,
            onError: reject,
        });
    });
} 
 
