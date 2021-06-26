import React from "react";
import Button from "../components/gui/button";
import { createPurchase } from "../services/purchaseService";

export class TestPage extends React.Component {
    async aaaaa () {
        const purchase = await createPurchase("sammwy", "paypal", [
            {
                "id": "60d7bb3f6583b41ca04287d7",
                "amount": 10
            }
        ]).catch((e) => {
            alert("Error: " + e);
        })

        alert(JSON.stringify(purchase));
    }

    render() {
       return (
           <Button onClick={this.aaaaa}>Hola</Button>
       )
    }
}