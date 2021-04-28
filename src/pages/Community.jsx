import SummaryBigAndDoubles from "../components/layout/SummaryBigAndDoubles";

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
