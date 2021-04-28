import graphql from 'babel-plugin-relay/macro';

export default graphql`
    mutation addRoleToUserMutation ($payload: AddRoleUserInput!) {
        addRoleToUser (payload: $payload) {
            _id
            username
            email
            roles {
                _id
                name
                color
                background
                permissions
            }
        }
    }
`