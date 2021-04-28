import graphql from 'babel-plugin-relay/macro';

export default graphql`
    mutation createCategoryMutation($payload: CreateCategoryInput!) {
        createCategory(payload: $payload) {
            _id
            description
            shrug
            name
        }
    }
`;