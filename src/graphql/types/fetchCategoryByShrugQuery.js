 
 
import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query fetchCategoryByShrugQuery ($shrug: String!) {
        fetchCategoryByShrug (shrug: $shrug) {
            _id
            description
            shrug
            name
        }
    }
`;
