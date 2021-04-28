/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fetchPurchaseByIDQueryVariables = {|
  id: string
|};
export type fetchPurchaseByIDQueryResponse = {|
  +fetchPurchaseByID: {|
    +_id: string,
    +status: string,
    +buyer: string,
    +items: $ReadOnlyArray<{|
      +_id: string,
      +amount: number,
      +product: {|
        +_id: string,
        +category: string,
        +description: string,
        +name: string,
        +price: number,
      |},
    |}>,
  |}
|};
export type fetchPurchaseByIDQuery = {|
  variables: fetchPurchaseByIDQueryVariables,
  response: fetchPurchaseByIDQueryResponse,
|};
*/


/*
query fetchPurchaseByIDQuery(
  $id: String!
) {
  fetchPurchaseByID(id: $id) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Purchase",
    "kind": "LinkedField",
    "name": "fetchPurchaseByID",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "buyer",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "PurchaseItem",
        "kind": "LinkedField",
        "name": "items",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "amount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Product",
            "kind": "LinkedField",
            "name": "product",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "category",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "price",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "fetchPurchaseByIDQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "fetchPurchaseByIDQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "37dc072a8e7f64adf3c9dad75506334d",
    "id": null,
    "metadata": {},
    "name": "fetchPurchaseByIDQuery",
    "operationKind": "query",
    "text": "query fetchPurchaseByIDQuery(\n  $id: String!\n) {\n  fetchPurchaseByID(id: $id) {\n    _id\n    status\n    buyer\n    items {\n      _id\n      amount\n      product {\n        _id\n        category\n        description\n        name\n        price\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aa19c39169c3d31d39a3b6a5c78a80bd';

module.exports = node;
