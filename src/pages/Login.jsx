import { Button } from "@chakra-ui/button";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import SummaryFullWide from "../components/layout/SummaryFullWide";

import { login } from '../redux/actions'

import './Login.css'

export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            message: null,
            emailField: null,
            passwordField: null,
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        if(this.props.user)
            this.props.history.push('/')
    }

    loginWithCredentials(email, password) {
        login({email: email, password: password}, this.props.history).then(() => {
            this.displayMessage({
                type: "success",
                message: "Iniciada la sesión! Redirigiendo..."
            })  
            window.location.pathname = "/"
        })
        .catch(error => {
            this.displayMessage({
                type: "error",
                message: error
            })
        })
    }

    handleEmailChange(event) {
        this.setState({emailField: event.target.value});
    }

    handlePassChange(event) {
        this.setState({passwordField: event.target.value});
    }

    displayMessage(message) {
        this.setState({message: message})
        setTimeout(()=> this.setState({message: null}), 10000)
    }

    handleSubmit(event) {
        event.preventDefault()
        if(this.state.emailField && this.state.passwordField) {
            this.loginWithCredentials(this.state.emailField, this.state.passwordField)
            console.log('Attemping login...')
        } else {
            this.displayMessage({ type: "error", message: "Completa todos los campos para iniciar sesión." })
            console.log('Missing parameters.')
        }

    }

    drawMessage(message) {
        if(message) return (
            <div className={message.type}>
                {message.message}
            </div>
        )
    }

    render() {
        return(
            <div>
                <div className="error" style={{textAlign: "center", margin: "0px 0px 30px 0px"}}>
                    <b>¡NO INICIES SESIÓN CON LOS DATOS DEL SERVIDOR! ¡LAS CUENTAS DEL SITIO DEBEN SER <Link style={{textDecoration: "underline"}} to="/register">REGISTRADAS DESDE CERO!</Link></b>
                </div>
                <Container
                    style={{textAlign: "center"}}
                    id={"news"}
                    header={[<Link to="/">{"Inicio"}</Link>, " > Iniciar sesión "]}
                >
                    {this.drawMessage(this.state.message)}
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <p><input id="email" type="text" placeholder="E-mail" value={this.state.emailField} onChange={this.handleEmailChange} /></p>
                        <p><input
                            id="password"
                            style={{ marginBottom: "30px" }}
                            value={this.state.passwordField}
                            onChange={this.handlePassChange}
                            type="password"
                            placeholder="Contraseña" />
                        </p>
                        <p><input
                            type="submit"
                            value="Iniciar sesión"
                            style={{
                                cursor: "pointer",
                                background: "#ffc44d",
                                color: "#000000"
                            }}
                        /></p>
                    </form>
                </Container>
                <Link to="/register">
                    <SummaryFullWide
                        image={"/assets/bg1.jpg"}
                        title={"¿No tienes cuenta?"}
                        subtitle={"¡Crea una para comenzar a disfrutar de los beneficios del servidor!"}
                    >
                        <Button
                            style={{
                                background: "#ffc44d",
                                color: "#000000",
                                marginTop: "20px"
                            }}
                        >¡Regístrate!</Button>
                    </SummaryFullWide>
                </Link>
            </div>
        )
    }   

}