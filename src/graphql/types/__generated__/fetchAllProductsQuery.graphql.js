/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type fetchAllProductsQueryVariables = {||};
export type fetchAllProductsQueryResponse = {|
  +fetchAllProducts: $ReadOnlyArray<{|
    +_id: string,
    +description: string,
    +price: number,
    +name: string,
  |}>
|};
export type fetchAllProductsQuery = {|
  variables: fetchAllProductsQueryVariables,
  response: fetchAllProductsQueryResponse,
|};
*/


/*
query fetchAllProductsQuery {
  fetchAllProducts {
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
    "alias": null,
    "args": null,
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "fetchAllProducts",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "fetchAllProductsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "fetchAllProductsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9b2a8bad1223c73d9fd2e05f717fdcf6",
    "id": null,
    "metadata": {},
    "name": "fetchAllProductsQuery",
    "operationKind": "query",
    "text": "query fetchAllProductsQuery {\n  fetchAllProducts {\n    _id\n    description\n    price\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4a8a99d41c69a0505bf4c32c57153c3f';

module.exports = node;
