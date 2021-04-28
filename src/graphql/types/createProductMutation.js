import graphql from 'babel-plugin-relay/macro';

export default graphql`
    mutation createProductMutation($payload: CreateProductInput!) {
        createProduct (payload: $payload) {
            _id
            description
            category
            price
            name
        }
    }
` 
