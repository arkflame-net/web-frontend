/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fetchAllRolesQueryVariables = {||};
export type fetchAllRolesQueryResponse = {|
  +fetchAllRoles: $ReadOnlyArray<{|
    +_id: string,
    +background: string,
    +name: string,
    +color: string,
    +permissions: $ReadOnlyArray<string>,
  |}>
|};
export type fetchAllRolesQuery = {|
  variables: fetchAllRolesQueryVariables,
  response: fetchAllRolesQueryResponse,
|};
*/


/*
query fetchAllRolesQuery {
  fetchAllRoles {
    _id
    background
    name
    color
    permissions
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Role",
    "kind": "LinkedField",
    "name": "fetchAllRoles",
    "plural": true,
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
        "name": "background",
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
        "name": "permissions",
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
    "name": "fetchAllRolesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "fetchAllRolesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "dc5f7efead04473348ca5fb7890a53b4",
    "id": null,
    "metadata": {},
    "name": "fetchAllRolesQuery",
    "operationKind": "query",
    "text": "query fetchAllRolesQuery {\n  fetchAllRoles {\n    _id\n    background\n    name\n    color\n    permissions\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b6d27350f82df4ceff94d39ed8502c76';

module.exports = node;
