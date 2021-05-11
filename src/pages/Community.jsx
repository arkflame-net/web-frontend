import React from "react";
import Container from "../components/layout/Container";
import SummaryDoubles from "../components/layout/SummaryDoubles";
import "./Community.css";

let copyIP = () => {
  let iphidden = document.getElementById("ip");
  iphidden.setSelectionRange(0, 99999);
  iphidden.select();

  document.execCommand("copy");
};

export default class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }

  componentDidMount() {
    fetch("https://status.arkflame.com/json").then((r) =>
      r.json().then((response) => {
        console.log(response);
        this.setState({ status: response });
      })
    );
  }

  render() {
    return (
      <div>
        <Container
          id="join"
          header={["Comunidad > ", <a href="#join">{"Unirse al servidor"}</a>]}
        >
          <div
            className="join-placeholder"
            style={{ background: 'url("/assets/dirt.png")' }}
          >
            <div className="community-title">
              ¡Únete a
              {this.state.status != null
                ? " " + this.state.status.services[0].result.players + " "
                : " 0 "}
              jugadores conectados!
            </div>
            <input id="ip" className="join-ip" value="play.arkflame.com" />
            <div
              className="mc-button"
              onClick={copyIP}
              style={{ background: 'url("/assets/mc-button.webp")' }}
            >
              Copiar IP
            </div>
          </div>
        </Container>
        <Container
          id="links"
          header={["Comunidad > ", <a href="#links">{"Links útiles"}</a>]}
        >
          <SummaryDoubles
            left={{ image: "/assets/panels/discord.jpg", title: "Discord" }}
            right={{ image: "/assets/panels/twitter.jpg", title: "Twitter" }}
          />
        </Container>
      </div>
    );
  }
}
