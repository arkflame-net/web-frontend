import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query fetchAllPurchasesQuery {
        fetchAllPurchases {
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