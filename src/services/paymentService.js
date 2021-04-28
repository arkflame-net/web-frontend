import { commitMutation } from 'react-relay'; 
import { initEnvironment } from '../relay/environment';

import { confirmPaymentMutation } from "../graphql";

const environment = initEnvironment();

export const confirmPayment  = (paymentID, payerID) => {
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation: confirmPaymentMutation,
            variables: {
                payload: {paymentID, payerID}
            },
            onCompleted: resolve,
            onError: reject,
        });
    });
} 
