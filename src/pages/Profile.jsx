import Container from "../components/layout/Container";
import SummaryTrio from "../components/layout/SummaryTrio";
import "./Profile.css";
import React from "react";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    fetch(
      "https://api.arkflame.com/user/" + window.location.pathname.split("/")[2]
    ).then((r) =>
      r.json().then((response) => {
        this.setState({ userData: response });
      })
    );
  }

  render() {
    return (
      <div>
        <div
          className="user-username"
          style={{ background: 'url("/assets/bg2.jpg")' }}
        >
          <span className="admin tag">ADMIN</span>
          Gerar
        </div>
        <div className="user-container">
          <div className="user-row">
            <img
              className="user-body"
              alt="Usuario"
              src="https://crafatar.com/renders/body/67733759e7c44b36aba7f7d58e1af9d6?overlay=1"
            />
            <div
              className="user-body"
              style={{ color: "#0f0", fontSize: "18px" }}
            >
              ⬤ Online
            </div>
          </div>
          <div className="container-row">
            <Container
              id={"stats"}
              header={["Gerar > ", <a href="#stats">Estadísticas</a>]}
            >
              <SummaryTrio
                left={{ title: "SkyWars" }}
                middle={{ title: "ArenaPvP" }}
                right={{ title: "HCS" }}
              />
            </Container>
            <Container
              id={"info"}
              header={["Gerar > ", <a href="#info">Información del jugador</a>]}
            >
              Esta es una descripción
            </Container>
            <Container
              id={"comments"}
              header={["Gerar > ", <a href="#comments">Comentarios</a>]}
            >
              No hay comentarios
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
