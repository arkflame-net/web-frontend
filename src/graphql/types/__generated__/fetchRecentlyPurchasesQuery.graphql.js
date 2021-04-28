/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fetchRecentlyPurchasesQueryVariables = {||};
export type fetchRecentlyPurchasesQueryResponse = {|
  +fetchRecentlyPurchases: $ReadOnlyArray<{|
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
  |}>
|};
export type fetchRecentlyPurchasesQuery = {|
  variables: fetchRecentlyPurchasesQueryVariables,
  response: fetchRecentlyPurchasesQueryResponse,
|};
*/


/*
query fetchRecentlyPurchasesQuery {
  fetchRecentlyPurchases {
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "_id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Purchase",
    "kind": "LinkedField",
    "name": "fetchRecentlyPurchases",
    "plural": true,
    "selections": [
      (v0/*: any*/),
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
          (v0/*: any*/),
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
              (v0/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "fetchRecentlyPurchasesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "fetchRecentlyPurchasesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5e1b4ae5d5313d5047883bd1629d2066",
    "id": null,
    "metadata": {},
    "name": "fetchRecentlyPurchasesQuery",
    "operationKind": "query",
    "text": "query fetchRecentlyPurchasesQuery {\n  fetchRecentlyPurchases {\n    _id\n    status\n    buyer\n    items {\n      _id\n      amount\n      product {\n        _id\n        category\n        description\n        name\n        price\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '337baa60a0723abb4ba6b600ada2547d';

module.exports = node;
