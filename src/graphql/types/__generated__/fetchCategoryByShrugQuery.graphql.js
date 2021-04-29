/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fetchCategoryByShrugQueryVariables = {|
  shrug: string
|};
export type fetchCategoryByShrugQueryResponse = {|
  +fetchCategoryByShrug: {|
    +_id: string,
    +description: string,
    +shrug: string,
    +name: string,
  |}
|};
export type fetchCategoryByShrugQuery = {|
  variables: fetchCategoryByShrugQueryVariables,
  response: fetchCategoryByShrugQueryResponse,
|};
*/


/*
query fetchCategoryByShrugQuery(
  $shrug: String!
) {
  fetchCategoryByShrug(shrug: $shrug) {
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
    "name": "shrug"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "shrug",
        "variableName": "shrug"
      }
    ],
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "fetchCategoryByShrug",
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
    "name": "fetchCategoryByShrugQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "fetchCategoryByShrugQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c567eb52274f6c202ee355bb169ef775",
    "id": null,
    "metadata": {},
    "name": "fetchCategoryByShrugQuery",
    "operationKind": "query",
    "text": "query fetchCategoryByShrugQuery(\n  $shrug: String!\n) {\n  fetchCategoryByShrug(shrug: $shrug) {\n    _id\n    description\n    shrug\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e7503e47cee5a70b3d05b77b84a7882b';

module.exports = node;
