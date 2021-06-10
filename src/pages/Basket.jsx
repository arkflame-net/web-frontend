import React from "react";
import {
    chakra,
    Flex,
    Button,
    Stack,
    SimpleGrid,
} from "@chakra-ui/react";
import { FiTrash2 } from 'react-icons/fi'
import Container from '../components/layout/Container'
import { Link } from 'react-router-dom'
import './Basket.css'

var basketTotal;
var updateBasketTotal;

export class BasketItem extends React.Component {
    render() {
        const { basket, item } = this.props
        return (
            <Flex style={{borderBottom: "3px solid #313742"}} direction={{ base: "row", sm: "column" }} bg="#424853" color="#fff">
                <SimpleGrid spacingY={3} columns={{ base: 1, sm: 6 }} w="full" py={3} px={10} fontWeight="hairline">
                    <span>{item.name}</span>
                    <chakra.span textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">{item.price}</chakra.span>
                    <chakra.span textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">{item.category}</chakra.span>
                    <chakra.span textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">{basket.getItemAmount(item.id)}</chakra.span>
                    <chakra.span textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">{basket.getItemAmount(item.id) * item.price}</chakra.span>
                    <span>
                        <Button onClick={(e) => {e.preventDefault(); basket.removeItem(item.id, 1)}}
                        variant="solid" style={{ "display": "inline-block", "margin": "1px 5px" }} colorScheme="red" size="sm">
                            <FiTrash2 />
                        </Button>
                    </span>
                </SimpleGrid>
            </Flex>
        );
    }
}

export function BasketFooter(props) {
    return (<SimpleGrid
        spacingY={3}
        columns={{ base: 1, sm: 1 }}
        w={{ base: 100, sm: "full" }}
        textTransform="uppercase"
        bg="#313742"
        color="#fff"
        py={{ base: 1, sm: 4 }}
        px={{ base: 2, sm: 6 }}
        fontSize="sm"
        fontWeight="hairline"
        borderRadius="0px 0px 10px 10px"
        justifyContent="space-between"
    >
        <span style={{textAlign: "right", fontWeight: "bold", fontSize: "18px"}}>Subtotal: ${props.subtotal}</span>
        <Link to="/store" style={{width: "100%"}}><Button style={{background: "#3edb00", color: "#000", width: "100%"}}>Seguir comprando</Button></Link>
        <Link to="/store/checkout" style={{width: "100%"}}><Button disabled={props.basket.getItems().length <= 0} style={{background: "rgb(255, 196, 77)", color: "#000", width: "100%"}}>Terminar compra</Button></Link>
    </SimpleGrid>
    );
}

export function BasketHeader(props) {
    return (<SimpleGrid
        spacingY={3}
        columns={{ base: 1, sm: 6 }}
        w={{ base: 100, sm: "full" }}
        textTransform="uppercase"
        bg="#313742"
        color="#fff"
        py={{ base: 1, sm: 4 }}
        px={{ base: 2, sm: 10 }}
        fontSize="sm"
        fontWeight="hairline"
        borderRadius="10px 10px 0px 0px"
    >
        <span>Nombre</span>
        <span>Precio</span>
        <span>Categoría</span>
        <span>Cantidad</span>
        <span>Total</span>
        <span>Actions</span>
    </SimpleGrid>
    );
}

export default class Basket extends React.Component {

    constructor(props) {
        super(props)
        this.state = {items: null}
    }

    componentDidMount() {
        
    }

    renderItems(basket) {
        if(basket) {
            let items = basket.getItems()
            if(items.length > 0) {
                basket.getTotalPrice().then((val)=>{
                    updateBasketTotal(val);
                })

                return (
                    <div>
                        {
                            items.map((item, key) => (
                                <BasketItem basket={basket} key={key} item={item} />
                            ))
                        }
                    </div>
                )
            }
            else return (
                <p style={{padding: "20px 0px"}}><span>No hay ningún item en el carrito.</span></p>
            )
        } else return <div>Cargando...</div>
    }

    render() {
        const {basket} = this.props
        return (
            <div>
                <Container
                    style={{textAlign: "center"}}
                    id={"cart"}
                    header={[<Link to="/">{"Tienda"}</Link>, " > Carrito "]}
                >
                    <BasketHeader />
                    {this.renderItems(basket)}
                    <BasketFooter {...this.props} subtotal={basketTotal ? basketTotal : 0} />
                </Container>
                <Container
                    style={{marginLeft: "30px", marginRight: "30px"}}
                    id={"cart"}
                    header={[<Link to="/store">{"Tienda"}</Link>, " > Cupones"]}
                >
                    <span style={{textAlign: "right", fontSize: "20px"}}>¿Tienes un cupón?</span>
                    <form className="login-form" style={{width: "100%", marginBottom: "0px"}}>
                        <p><input id="coupon" type="text" placeholder={"Ejemplo: " + '"CUP0NF4CH3R0"'} style={{width: "100%"}} /></p>
                        <p>
                            <input type="submit" value="Canjear"
                            style={{
                                fontWeight: "bold",
                                width: "100%",
                                cursor: "pointer",
                                background: "#ffc44d",
                                color: "#000000"
                            }} />
                        </p>
                    </form>
                </Container>
            </div>
        )
    }
}