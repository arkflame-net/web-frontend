import * as Chakra from "@chakra-ui/react";

export default function Button (props) {
    return (
        <Chakra.Button style={{
            "background": "#FFC44D",
            "color": "#000",
            "display": "inline-flex",
            "alignItems": "center",
            "boxShadow": "0 5px 8px -5px rgb(0 0 0 / 30%), 0 5px 30px -5px rgb(0 0 0 / 50%)",
            "borderRadius": "15px",
            "width": props.width || "200px",
            "height": props.height || "40px"
        }} {...props}/>
    )
}