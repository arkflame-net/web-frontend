import React from "react";
import Container from "../components/layout/Container";
import { Link } from 'react-router-dom'
import { confirmPayment } from '../services/purchaseService'
import {
    chakra,
    Flex,
    Button,
    Stack,
    SimpleGrid,
} from "@chakra-ui/react";

import './Checkout.css'

export default class Checkout extends React.Component {

    componenDidMount() {
        const {user, basket} = this.props
        //if(!user) window.location.href = "/"
    }

    render() {
        const {user, basket} = this.props
        return (
            <div className="checkout-container-page">
                <Container
                    style={{textAlign: "center"}}
                    id={"checkout"}
                    header={[<Link to="/">{"Tienda"}</Link>, " > Finalizar compra "]}
                >   
                    <div className="checkout-header">
                        <p><span style={{fontSize: "30px"}}>Vas a finalizar tu compra</span></p>
                        <p><span style={{fontSize: "20px"}}>{"Total: $647832647823"}</span></p>
                    </div>
                    <ul className="checkout-buttons">
                        <li><Button onClick={(e) => {e.preventDefault(); }} style={{background: "#00457C", color: "#fff"}}>Pagar con PayPal</Button></li>
                        <li><Button style={{background: "#ffe600", color: "#000"}}>Pagar con MercadoPago (Solo Argentina)</Button></li>
                    </ul>
                </Container>
            </div>
        )
    }
}