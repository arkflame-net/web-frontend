/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type confirmPaymentMutationVariables = {|
  paymentID: string,
  payerID: string,
|};
export type confirmPaymentMutationResponse = {|
  +confirmPayment: boolean
|};
export type confirmPaymentMutation = {|
  variables: confirmPaymentMutationVariables,
  response: confirmPaymentMutationResponse,
|};
*/


/*
mutation confirmPaymentMutation(
  $paymentID: String!
  $payerID: String!
) {
  confirmPayment(paymentID: $paymentID, payerID: $payerID)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "payerID"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "paymentID"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "payerID",
        "variableName": "payerID"
      },
      {
        "kind": "Variable",
        "name": "paymentID",
        "variableName": "paymentID"
      }
    ],
    "kind": "ScalarField",
    "name": "confirmPayment",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "confirmPaymentMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "confirmPaymentMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a813c089ca06ed2312cf19dc5de7957f",
    "id": null,
    "metadata": {},
    "name": "confirmPaymentMutation",
    "operationKind": "mutation",
    "text": "mutation confirmPaymentMutation(\n  $paymentID: String!\n  $payerID: String!\n) {\n  confirmPayment(paymentID: $paymentID, payerID: $payerID)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '401e19db75e2bb041c4d00b3e275d9ad';

module.exports = node;
