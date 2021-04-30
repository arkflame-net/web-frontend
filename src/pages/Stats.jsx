import React from "react";
import SummaryFullWide from "../components/layout/SummaryFullWide";
import Button from "../components/gui/button";

export default class StatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: { show: false, title: null, description: null },
      context: null,
    };
  }

  componentDidMount() {
    fetch("https://status.arkflame.com/json")
      .then((response) =>
        response.json().then((context) => {
          this.setState({ context: context });
        })
      )
      .catch(() => {
        this.triggerError(
          "Ha ocurrido un error",
          "No fue posible concretar la solicitud al servidor de status."
        );
      });
  }

  triggerError(title, description) {
    this.setState({
      error: { show: true, title: title, description: description },
      context: {},
    });
  }

  render() {
    const { minigame, players } = this.props;

    // Check if the context has been loaded, then spawn a SummaryFullWide for the general server
    // Finally, for each minigame, spawn trios
    // If error, display error (duh lol)

    if (this.state.context)
      if (this.state.error.show)
        return (
          <div>
            <SummaryFullWide
              title={this.state.error.title}
              subtitle={this.state.error.description}
            >
              <br />
              <Button>Volver al inicio</Button>
            </SummaryFullWide>
          </div>
        );
      else
        return (
          <div>
            <SummaryFullWide
              title="ArkFlame"
              subtitle={`${this.state.context[0].players} jugadores.`}
            />
          </div>
        );
    else
      return (
        <div>
          <SummaryFullWide title="Cargando..." />
        </div>
      );
  }
}
