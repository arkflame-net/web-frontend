import graphql from 'babel-plugin-relay/macro';

export default graphql`
    mutation createPurchaseMutation ($payload: CreatePurchaseInput!) {
        createPurchase (payload: $payload) {
            _id
            method
            redirectURL
            purchase {
                _createdAt
                _id
                buyer
                status
                items {
                    _id
                    amount
                    product {
                        _id
                        category
                        price
                        name
                    }
                }
            }
        }
    }
`