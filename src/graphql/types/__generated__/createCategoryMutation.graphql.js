/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCategoryInput = {|
  description: string,
  name: string,
  shrug: string,
|};
export type createCategoryMutationVariables = {|
  payload: CreateCategoryInput
|};
export type createCategoryMutationResponse = {|
  +createCategory: {|
    +_id: string,
    +description: string,
    +shrug: string,
    +name: string,
  |}
|};
export type createCategoryMutation = {|
  variables: createCategoryMutationVariables,
  response: createCategoryMutationResponse,
|};
*/


/*
mutation createCategoryMutation(
  $payload: CreateCategoryInput!
) {
  createCategory(payload: $payload) {
    _id
    description
    shrug
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
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "createCategory",
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
        "name": "shrug",
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
    "name": "createCategoryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createCategoryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "cb391542d51c356763a310259120e753",
    "id": null,
    "metadata": {},
    "name": "createCategoryMutation",
    "operationKind": "mutation",
    "text": "mutation createCategoryMutation(\n  $payload: CreateCategoryInput!\n) {\n  createCategory(payload: $payload) {\n    _id\n    description\n    shrug\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd07c7f5163c31fe4cd9ad4970545b226';

module.exports = node;
