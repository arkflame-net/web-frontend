import Container from "../components/layout/Container";
import SummaryTrio from "../components/layout/SummaryTrio";
import Comment from '../components/layout/Comment'
import "./Profile.css";
import React from "react";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reqName: null,
      userData: null,
    };
  }

  componentDidMount() {
    this.setState({ reqName: window.location.pathname.split("/")[2] });
    fetch("https://api.arkflame.com/user/" + this.state.reqName).then((r) =>
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
          <span className="undefined tag">DEFAULT</span>
          {this.state.reqName}
        </div>
        <div className="user-container">
          <div className="user-row">
            <img
              className="user-body"
              alt="Usuario"
              src={`https://minotar.net/armor/body/${this.state.reqName}/500.png`}
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
              header={[
                this.state.reqName,
                " > ",
                <a href="#stats">Estadísticas</a>,
              ]}
            >
              <SummaryTrio
                left={{ title: "SkyWars" }}
                middle={{ title: "ArenaPvP" }}
                right={{ title: "HCS" }}
              />
            </Container>
            <Container
              id={"info"}
              style={{marginLeft: "20px", paddingBottom: "20px"}}
              header={[
                this.state.reqName,
                " > ",
                <a href="#info">Información del jugador</a>,
              ]}
            >
              Esta es una descripción
            </Container>
            <Container
              style={{marginLeft: "20px", paddingBottom: "20px"}}
              id={"comments"}
              header={[
                this.state.reqName,
                " > ",
                <a href="#comments">Comentarios</a>,
              ]}
            >
              <Comment author={{name: "LinsaFTW", picture: "https://minotar.net/helm/LinsaFTW/50.png"}} message="algoritmo" />
              <Comment author={{name: "Jotr1", picture: "https://minotar.net/helm/Jotr1/50.png"}} message="ruido de magia" />
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
