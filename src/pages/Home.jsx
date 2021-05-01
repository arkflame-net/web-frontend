import SummaryFullWide from "../components/layout/SummaryFullWide";
import SummaryDoubles from "../components/layout/SummaryDoubles";
import SummaryTrio from "../components/layout/SummaryTrio";
import SummaryDoublesAndBig from "../components/layout/SummaryDoublesAndBig";
import SummaryBigAndDoubles from "../components/layout/SummaryBigAndDoubles";
import SummaryBigDoubles from "../components/layout/SummaryBigDoubles";

import Button from "../components/gui/button";

export default function Home(props) {
  return (
    <div>
      <SummaryFullWide
        title="ArkFlame Network"
        subtitle="¡Bienvenido a nuestro Servidor! Disfruta en cualquiera de tus versiones favoritas (1.7.x - 1.17.x)"
      />

      <SummaryDoubles
        left={{ title: "Left", subtitle: "LOL" }}
        right={{ title: "Right", subtitle: "LOL but right side" }}
      />
      <SummaryTrio
        left={{ title: "Left", subtitle: "LOL" }}
        middle={{ title: "I'm centered", subtitle: "Yup" }}
        right={{ title: "Right", subtitle: "LOL but right side" }}
      />
      <SummaryDoublesAndBig
        right={{ title: "Right", subtitle: "LOL" }}
        up={{ title: "UP", subtitle: "Yup" }}
        down={{ title: "DOWN", subtitle: "LOL but bottom side" }}
      />
      <SummaryBigAndDoubles
        left={{ title: "Left", subtitle: "LOL" }}
        up={{ title: "UP", subtitle: "Yup" }}
        down={{ title: "DOWN", subtitle: "LOL but bottom side" }}
      />
      <SummaryBigDoubles
        left={{ title: "Left", subtitle: "LOL" }}
        right={{ title: "Right", subtitle: "LOL but right side" }}
      />
    </div>
  );
}
