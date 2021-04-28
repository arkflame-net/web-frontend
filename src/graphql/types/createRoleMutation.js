import graphql from 'babel-plugin-relay/macro';

export default graphql`
    mutation createRoleMutation ($payload: CreateRoleInput!) {
        createRole (payload: $payload) {
            _id
            name
            color
            background
            permissions
        }
    }
`