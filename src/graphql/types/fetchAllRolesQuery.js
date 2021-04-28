import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query fetchAllRolesQuery {
        fetchAllRoles {
            _id
            background
            name
            color
            permissions
        }
    }
`