/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserInput = {|
  email: string,
  password: string,
  username: string,
|};
export type createUserMutationVariables = {|
  payload: CreateUserInput
|};
export type createUserMutationResponse = {|
  +createUser: {|
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
export type createUserMutation = {|
  variables: createUserMutationVariables,
  response: createUserMutationResponse,
|};
*/


/*
mutation createUserMutation(
  $payload: CreateUserInput!
) {
  createUser(payload: $payload) {
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
    "name": "createUser",
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
    "name": "createUserMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createUserMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "1d762048b2fc1739defb9ff176367bc3",
    "id": null,
    "metadata": {},
    "name": "createUserMutation",
    "operationKind": "mutation",
    "text": "mutation createUserMutation(\n  $payload: CreateUserInput!\n) {\n  createUser(payload: $payload) {\n    _id\n    username\n    email\n    roles {\n      _id\n      name\n      color\n      background\n      permissions\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c980e8359b7f0dd1af13cf8299790863';

module.exports = node;
