/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateRoleInput = {|
  background: string,
  color: string,
  name: string,
  permissions: $ReadOnlyArray<string>,
|};
export type createRoleMutationVariables = {|
  payload: CreateRoleInput
|};
export type createRoleMutationResponse = {|
  +createRole: {|
    +_id: string,
    +name: string,
    +color: string,
    +background: string,
    +permissions: $ReadOnlyArray<string>,
  |}
|};
export type createRoleMutation = {|
  variables: createRoleMutationVariables,
  response: createRoleMutationResponse,
|};
*/


/*
mutation createRoleMutation(
  $payload: CreateRoleInput!
) {
  createRole(payload: $payload) {
    _id
    name
    color
    background
    permissions
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
    "concreteType": "Role",
    "kind": "LinkedField",
    "name": "createRole",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "color",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "background",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "permissions",
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
    "name": "createRoleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createRoleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ba14e322ba198a99b8d5dcfcb03c7df6",
    "id": null,
    "metadata": {},
    "name": "createRoleMutation",
    "operationKind": "mutation",
    "text": "mutation createRoleMutation(\n  $payload: CreateRoleInput!\n) {\n  createRole(payload: $payload) {\n    _id\n    name\n    color\n    background\n    permissions\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b11f5e07ec309f20fc9e2dd15c775ca1';

module.exports = node;
