import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query fetchProductsByCategoryQuery ($category: String!) {
        fetchProductsByCategory (category: $category) {
            _id
            description
            price
            name
        }
    }
`;