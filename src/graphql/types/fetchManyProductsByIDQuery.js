import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query fetchManyProductsByIDQuery ($ids: [String!]!) {
        fetchManyProductsByID (ids: $ids) {
            _id
            description
            price
            name
        }
    }
`;