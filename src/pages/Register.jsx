import { Button } from "@chakra-ui/button";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import SummaryFullWide from "../components/layout/SummaryFullWide";

import { register } from "../services/authService";

import "./Login.css";

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null,
      userField: null,
      emailField: null,
      passwordField: null,
      passwordDupField: null,
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handlePassDupChange = this.handlePassDupChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.user) this.props.history.push("/");
  }

  parseResponse(response) {
    if (response.includes("createUserMutation")) {
      let split = response.split(":")[1].split("See")[0];
      return split.charAt(1).toUpperCase() + split.slice(2);
    } else return response;
  }

  registerWithCredentials(user, email, password) {
    register(email, password, user)
      .then(() => {
        this.displayMessage({
          type: "success",
          message: "Cuenta registrada! Redirigiendo...",
        });
        setTimeout(() => {
          window.location.pathname = "/";
        }, 2000);
      })
      .catch((error) => {
        this.displayMessage({
          type: "error",
          message: this.parseResponse(error.message),
        });
      });
  }

  handleEmailChange(event) {
    this.setState({ emailField: event.target.value });
  }

  handleUserChange(event) {
    this.setState({ userField: event.target.value });
  }

  handlePassChange(event) {
    this.setState({ passwordField: event.target.value });
  }

  handlePassDupChange(event) {
    this.setState({ passwordDupField: event.target.value });
  }

  displayMessage(message) {
    this.setState({ message: message });
    setTimeout(() => this.setState({ message: null }), 10000);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.emailField &&
      this.state.passwordField &&
      this.state.passwordDupField &&
      this.state.userField
    ) {
      if (this.state.passwordDupField == this.state.passwordField) {
        this.registerWithCredentials(
          this.state.userField,
          this.state.emailField,
          this.state.passwordField
        );
        console.log("Attemping to register...");
      } else
        this.displayMessage({
          type: "error",
          message: "Las contraseñas no coinciden.",
        });
    } else {
      this.displayMessage({
        type: "error",
        message: "Completa todos los campos para poder registrarte.",
      });
      console.log("Missing parameters.");
    }
  }

  drawMessage(message) {
    if (message) return <div className={message.type}>{message.message}</div>;
  }

  render() {
    return (
      <div>
        <Container
          style={{ textAlign: "center" }}
          id={"news"}
          header={[<Link to="/">{"Inicio"}</Link>, " > Registro "]}
        >
          {this.drawMessage(this.state.message)}
          <form className="login-form" onSubmit={this.handleSubmit}>
            <p>
              <input
                id="username"
                type="text"
                placeholder="Usuario de Minecraft"
                value={this.state.userField}
                onChange={this.handleUserChange}
              />
            </p>
            <p>
              <input
                id="email"
                type="text"
                placeholder="Tu e-mail"
                value={this.state.emailField}
                onChange={this.handleEmailChange}
              />
            </p>
            <p>
              <input
                id="password"
                value={this.state.passwordField}
                onChange={this.handlePassChange}
                type="password"
                placeholder="Nueva contraseña"
              />
            </p>
            <p>
              <input
                id="password"
                style={{ marginBottom: "30px" }}
                value={this.state.passwordDupField}
                onChange={this.handlePassDupChange}
                type="password"
                placeholder="Repite tu contraseña"
              />
            </p>
            <p>
              <input
                type="submit"
                value="¡Regístrame!"
                style={{
                  cursor: "pointer",
                  background: "#ffc44d",
                  color: "#000000",
                }}
              />
            </p>
          </form>
        </Container>
        <Link to="/login">
          <SummaryFullWide
            image={"assets/bg3.jpg"}
            title={"¿Ya tienes cuenta?"}
            subtitle={
              "¡Inicia sesión con tus credenciales para sincronizar tus datos con el sitio!"
            }
          >
            <Button
              style={{
                background: "#ffc44d",
                color: "#000000",
                marginTop: "20px",
              }}
            >
              ¡Inicia sesión!
            </Button>
          </SummaryFullWide>
        </Link>
      </div>
    );
  }
}
