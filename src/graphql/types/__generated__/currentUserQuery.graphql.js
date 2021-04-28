/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type currentUserQueryVariables = {||};
export type currentUserQueryResponse = {|
  +currentUser: {|
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
export type currentUserQuery = {|
  variables: currentUserQueryVariables,
  response: currentUserQueryResponse,
|};
*/


/*
query currentUserQuery {
  currentUser {
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
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "currentUser",
    "plural": false,
    "selections": [
      (v0/*: any*/),
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
          (v0/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "currentUserQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "currentUserQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1478c3112a9bfda1f41582242261c6fe",
    "id": null,
    "metadata": {},
    "name": "currentUserQuery",
    "operationKind": "query",
    "text": "query currentUserQuery {\n  currentUser {\n    _id\n    username\n    email\n    roles {\n      _id\n      name\n      color\n      background\n      permissions\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2f8d45a262cab503a8b028db50001efe';

module.exports = node;
