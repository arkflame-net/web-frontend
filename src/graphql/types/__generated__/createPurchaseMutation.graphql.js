/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePurchaseInput = {|
  items: $ReadOnlyArray<ItemInput>,
  method: string,
  username: string,
|};
export type ItemInput = {|
  amount: number,
  id: string,
|};
export type createPurchaseMutationVariables = {|
  payload: CreatePurchaseInput
|};
export type createPurchaseMutationResponse = {|
  +createPurchase: {|
    +_id: string,
    +method: string,
    +redirectURL: string,
    +purchase: {|
      +_createdAt: any,
      +_id: string,
      +buyer: string,
      +status: string,
      +items: $ReadOnlyArray<{|
        +_id: string,
        +amount: number,
        +product: {|
          +_id: string,
          +category: string,
          +price: number,
          +name: string,
        |},
      |}>,
    |},
  |}
|};
export type createPurchaseMutation = {|
  variables: createPurchaseMutationVariables,
  response: createPurchaseMutationResponse,
|};
*/


/*
mutation createPurchaseMutation(
  $payload: CreatePurchaseInput!
) {
  createPurchase(payload: $payload) {
    _id
    method
    redirectURL
    purchase {
      _createdAt
      _id
      buyer
      status
      items {
        _id
        amount
        product {
          _id
          category
          price
          name
        }
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
    "name": "payload"
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
        "name": "payload",
        "variableName": "payload"
      }
    ],
    "concreteType": "Payment",
    "kind": "LinkedField",
    "name": "createPurchase",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "method",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "redirectURL",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Purchase",
        "kind": "LinkedField",
        "name": "purchase",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "_createdAt",
            "storageKey": null
          },
          (v1/*: any*/),
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
            "kind": "ScalarField",
            "name": "status",
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
                    "name": "price",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createPurchaseMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createPurchaseMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "4eb7aefa5f7ef701e7b5760e26482254",
    "id": null,
    "metadata": {},
    "name": "createPurchaseMutation",
    "operationKind": "mutation",
    "text": "mutation createPurchaseMutation(\n  $payload: CreatePurchaseInput!\n) {\n  createPurchase(payload: $payload) {\n    _id\n    method\n    redirectURL\n    purchase {\n      _createdAt\n      _id\n      buyer\n      status\n      items {\n        _id\n        amount\n        product {\n          _id\n          category\n          price\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '597e9f5cce1f607fa29162666be41d0b';

module.exports = node;
