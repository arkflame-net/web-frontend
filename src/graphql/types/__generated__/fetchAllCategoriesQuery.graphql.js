/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fetchAllCategoriesQueryVariables = {||};
export type fetchAllCategoriesQueryResponse = {|
  +fetchAllCategories: $ReadOnlyArray<{|
    +_id: string,
    +description: string,
    +shrug: string,
    +name: string,
  |}>
|};
export type fetchAllCategoriesQuery = {|
  variables: fetchAllCategoriesQueryVariables,
  response: fetchAllCategoriesQueryResponse,
|};
*/


/*
query fetchAllCategoriesQuery {
  fetchAllCategories {
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
    "alias": null,
    "args": null,
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "fetchAllCategories",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "fetchAllCategoriesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "fetchAllCategoriesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "fb990eb276a1e62f0ed2a3928f540f10",
    "id": null,
    "metadata": {},
    "name": "fetchAllCategoriesQuery",
    "operationKind": "query",
    "text": "query fetchAllCategoriesQuery {\n  fetchAllCategories {\n    _id\n    description\n    shrug\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a3fc33907df72020ce29e4106f6b5033';

module.exports = node;
