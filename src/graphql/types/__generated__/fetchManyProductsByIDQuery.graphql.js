/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fetchManyProductsByIDQueryVariables = {|
  ids: $ReadOnlyArray<string>
|};
export type fetchManyProductsByIDQueryResponse = {|
  +fetchManyProductsByID: $ReadOnlyArray<{|
    +_id: string,
    +description: string,
    +price: number,
    +name: string,
  |}>
|};
export type fetchManyProductsByIDQuery = {|
  variables: fetchManyProductsByIDQueryVariables,
  response: fetchManyProductsByIDQueryResponse,
|};
*/


/*
query fetchManyProductsByIDQuery(
  $ids: [String!]!
) {
  fetchManyProductsByID(ids: $ids) {
    _id
    description
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
    "name": "ids"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "ids",
        "variableName": "ids"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "fetchManyProductsByID",
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
    "name": "fetchManyProductsByIDQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "fetchManyProductsByIDQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7cf51272398e20f175db2faa08749edd",
    "id": null,
    "metadata": {},
    "name": "fetchManyProductsByIDQuery",
    "operationKind": "query",
    "text": "query fetchManyProductsByIDQuery(\n  $ids: [String!]!\n) {\n  fetchManyProductsByID(ids: $ids) {\n    _id\n    description\n    price\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '78b38f76108fd1cfdc24cd682545745a';

module.exports = node;
