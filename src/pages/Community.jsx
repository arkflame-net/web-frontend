import SummaryFullWide from "../components/layout/SummaryFullWide";
import SummaryDoubles from "../components/layout/SummaryDoubles";
import SummaryTrio from "../components/layout/SummaryTrio";
import SummaryDoublesAndBig from "../components/layout/SummaryDoublesAndBig";
import SummaryBigAndDoubles from "../components/layout/SummaryBigAndDoubles";
import SummaryBigDoubles from "../components/layout/SummaryBigDoubles";

import Button from "../components/gui/button";

export default function Home (props) {
    return (
        <div>
            <SummaryBigAndDoubles
                left={{ title: "Nuestra comunidad", subtitle: "Si quieres hablar con otros jugadores o conocer nuevos amigos puedes unirte a nuestra comunidad, al igual que seguirnos en nuestras redes sociales para estar al tanto de las últimas noticias y actualizaciones"  }}
                up={{ image: "/assets/panels/discord.jpg", title: "Discord" }}
                down={{ image: "/assets/panels/twitter.jpg", title: "Twitter" }}
            />
        </div>
    )
} 
