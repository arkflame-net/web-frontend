/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fetchProductsByCategoryQueryVariables = {|
  category: string
|};
export type fetchProductsByCategoryQueryResponse = {|
  +fetchProductsByCategory: $ReadOnlyArray<{|
    +_id: string,
    +description: string,
    +price: number,
    +name: string,
  |}>
|};
export type fetchProductsByCategoryQuery = {|
  variables: fetchProductsByCategoryQueryVariables,
  response: fetchProductsByCategoryQueryResponse,
|};
*/


/*
query fetchProductsByCategoryQuery(
  $category: String!
) {
  fetchProductsByCategory(category: $category) {
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
    "name": "category"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "category",
        "variableName": "category"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "fetchProductsByCategory",
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
    "name": "fetchProductsByCategoryQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "fetchProductsByCategoryQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c54a928173d1e42336d1db4881f9d96f",
    "id": null,
    "metadata": {},
    "name": "fetchProductsByCategoryQuery",
    "operationKind": "query",
    "text": "query fetchProductsByCategoryQuery(\n  $category: String!\n) {\n  fetchProductsByCategory(category: $category) {\n    _id\n    description\n    price\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '212a79320432584f2183623627371dbf';

module.exports = node;
