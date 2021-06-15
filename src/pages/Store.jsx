import React from "react";
import Container from '../components/layout/Container'
import { Link } from 'react-router-dom'
import SummaryFullWide from "../components/layout/SummaryFullWide";
import SummaryFullMedium from "../components/layout/SummaryFullMedium";

import './Store.css'

export default class Store extends React.Component {
    render() {
        //const { basket, user } = this.props
        return (
            <div>
                <div style={{margin: "0px 0px 20px 0px"}}>
                    <Link to="/store/prefixes" style={{textAlign: "center"}}>
                        <SummaryFullWide
                            title="¡Nuevos prefixes!"
                            subtitle="Implementamos nuevos prefixes, ¡échales un ojo!"
                            image="https://cdn.discordapp.com/attachments/749177906869174323/854379887259156490/unknown.png"
                        />
                    </Link>
                </div>
                <Container
                    style={{margin: "20px 30px", paddingBottom: "30px"}}
                    id={"mainpage"}
                    header={[<Link to="/">{"Tienda"}</Link>, " > Inicio "]}
                >
                    <p><h1>¡Bienvenido a la tienda de ArkFlame Network!</h1></p>
                    <p style={{marginBlockStart: "0px"}}>En nuestra tienda podrás comprar diferentes tipos de beneficios para nuestro servidor.</p>
                    <p><h3 style={{textDecoration: "underline"}}>Antes de hacer una compra, asegúrate de cumplir con las siguientes:</h3>
                    <ul style={{marginLeft: "20px"}}>
                        <li>Tienes más de 18 años de edad, o has consultado a un padre/tutor.</li>
                        <li>Las ventas son a consumidor final, y <b>no</b> poseen la opción de ser canceladas o reembolsadas.</li>
                        <li>Las compras realizadas aquí son <b>intransferibles</b> a otros usuarios.</li>
                        <li>Has leído nuestros <b>términos y condiciones de compra</b>.</li>
                    </ul>
                    </p>
                    <p>El dinero de las compras es utilizado para el desarrollo de nuevas modalidades, pagar el host y nuevas funciones en el servidor.</p>
                    <p>Si tienes alguna duda puedes contactarnos por <a href="https://www.arkflame.com/discord">nuestro Discord</a>.</p>
                    <p>Utilizamos <b>PayPal</b> y <b>Mercado Pago</b> para procesar las transacciones de nuestra tienda de forma segura.</p>
                </Container>
                <Container
                    id={"mainpage"}
                    header={[<Link to="/">{"Tienda"}</Link>, " > Categorías más buscadas "]}
                >
                    <Link to="/store/ranks">
                        <SummaryFullMedium
                            title={"Rangos"}
                        />
                    </Link>
                    <Link to="/store/appeals">
                        <SummaryFullMedium
                            title={"Apelaciones"}
                        />
                    </Link>
                    <Link to="/store/keys">
                        <SummaryFullMedium
                            title={"Llaves"}
                        />
                    </Link>
                </Container>
            </div>
        )
    }
}