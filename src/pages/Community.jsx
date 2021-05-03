import Container from "../components/layout/Container";
import SummaryDoubles from "../components/layout/SummaryDoubles";

export default function Community(props) {
  return (
    <div>
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
