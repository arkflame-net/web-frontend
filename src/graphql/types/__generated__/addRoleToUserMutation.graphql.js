/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddRoleUserInput = {|
  role: string,
  user: string,
|};
export type addRoleToUserMutationVariables = {|
  payload: AddRoleUserInput
|};
export type addRoleToUserMutationResponse = {|
  +addRoleToUser: {|
    +_id: string,
    +username: string,
    +email: string,
    +roles: $ReadOnlyArray<{|
      +_id: string,
      +name: string,
      +color: string,
      +background: string,
      +permissions: $ReadOnlyArray<string>,
    |}>,
  |}
|};
export type addRoleToUserMutation = {|
  variables: addRoleToUserMutationVariables,
  response: addRoleToUserMutationResponse,
|};
*/


/*
mutation addRoleToUserMutation(
  $payload: AddRoleUserInput!
) {
  addRoleToUser(payload: $payload) {
    _id
    username
    email
    roles {
      _id
      name
      color
      background
      permissions
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "addRoleToUser",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Role",
        "kind": "LinkedField",
        "name": "roles",
        "plural": true,
        "selections": [
          (v1/*: any*/),
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "addRoleToUserMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addRoleToUserMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "7410e4ba0994e9c0570265d0d0c4085f",
    "id": null,
    "metadata": {},
    "name": "addRoleToUserMutation",
    "operationKind": "mutation",
    "text": "mutation addRoleToUserMutation(\n  $payload: AddRoleUserInput!\n) {\n  addRoleToUser(payload: $payload) {\n    _id\n    username\n    email\n    roles {\n      _id\n      name\n      color\n      background\n      permissions\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '090ae3b975dfb35be4e32fdc9b413b18';

module.exports = node;
