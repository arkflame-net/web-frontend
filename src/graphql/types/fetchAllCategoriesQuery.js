 
 
import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query fetchAllCategoriesQuery {
        fetchAllCategories {
            _id
            description
            shrug
            name
        }
    }
`;
