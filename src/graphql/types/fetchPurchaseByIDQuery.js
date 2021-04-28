import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query fetchPurchaseByIDQuery($id: String!) {
        fetchPurchaseByID (id: $id){
            _id
            status
            buyer
            items {
                _id
                amount
                product {
                    _id
                    category
                    description
                    name
                    price
                }
            }
        }
    }
`