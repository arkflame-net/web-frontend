/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProductInput = {|
  brief: string,
  category: string,
  commands: $ReadOnlyArray<string>,
  description: string,
  name: string,
  price: number,
|};
export type createProductMutationVariables = {|
  payload: CreateProductInput
|};
export type createProductMutationResponse = {|
  +createProduct: {|
    +_id: string,
    +description: string,
    +category: string,
    +price: number,
    +name: string,
  |}
|};
export type createProductMutation = {|
  variables: createProductMutationVariables,
  response: createProductMutationResponse,
|};
*/


/*
mutation createProductMutation(
  $payload: CreateProductInput!
) {
  createProduct(payload: $payload) {
    _id
    description
    category
    price
    name
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
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "payload",
        "variableName": "payload"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "createProduct",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e757a7def39747d43ed96839543b19e1",
    "id": null,
    "metadata": {},
    "name": "createProductMutation",
    "operationKind": "mutation",
    "text": "mutation createProductMutation(\n  $payload: CreateProductInput!\n) {\n  createProduct(payload: $payload) {\n    _id\n    description\n    category\n    price\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '98f1b7f6adddc1dcaf17c29f53b5ad13';

module.exports = node;
