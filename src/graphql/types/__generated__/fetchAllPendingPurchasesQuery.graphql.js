/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fetchAllPendingPurchasesQueryVariables = {||};
export type fetchAllPendingPurchasesQueryResponse = {|
  +fetchRecentlyPendingPurchases: $ReadOnlyArray<{|
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
export type fetchAllPendingPurchasesQuery = {|
  variables: fetchAllPendingPurchasesQueryVariables,
  response: fetchAllPendingPurchasesQueryResponse,
|};
*/


/*
query fetchAllPendingPurchasesQuery {
  fetchRecentlyPendingPurchases {
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
    "name": "fetchRecentlyPendingPurchases",
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
    "name": "fetchAllPendingPurchasesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "fetchAllPendingPurchasesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "25b0813aa05ae3ca48e548219aed737b",
    "id": null,
    "metadata": {},
    "name": "fetchAllPendingPurchasesQuery",
    "operationKind": "query",
    "text": "query fetchAllPendingPurchasesQuery {\n  fetchRecentlyPendingPurchases {\n    _id\n    status\n    buyer\n    items {\n      _id\n      amount\n      product {\n        _id\n        category\n        description\n        name\n        price\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eaed679c834b3085ff3660698e236c78';

module.exports = node;
