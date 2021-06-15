import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query fetchAllProductsQuery {
        fetchAllProducts {
            _id
            description
            price
            name
        }
    }
`;