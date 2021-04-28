import graphql from 'babel-plugin-relay/macro';

export default graphql`
    mutation confirmPaymentMutation($paymentID: String!, $payerID: String!) {
        confirmPayment (paymentID: $paymentID, payerID: $payerID)
    }
`