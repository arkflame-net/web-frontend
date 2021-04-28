/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fetchAllPurchasesQueryVariables = {||};
export type fetchAllPurchasesQueryResponse = {|
  +fetchAllPurchases: $ReadOnlyArray<{|
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
export type fetchAllPurchasesQuery = {|
  variables: fetchAllPurchasesQueryVariables,
  response: fetchAllPurchasesQueryResponse,
|};
*/


/*
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
    "name": "fetchAllPurchases",
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
    "name": "fetchAllPurchasesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "fetchAllPurchasesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "58cbc8bf662b6d94155b71389f760baf",
    "id": null,
    "metadata": {},
    "name": "fetchAllPurchasesQuery",
    "operationKind": "query",
    "text": "query fetchAllPurchasesQuery {\n  fetchAllPurchases {\n    _id\n    status\n    buyer\n    items {\n      _id\n      amount\n      product {\n        _id\n        category\n        description\n        name\n        price\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0ae2e0f84e1de2f278cafad797f9024b';

module.exports = node;
