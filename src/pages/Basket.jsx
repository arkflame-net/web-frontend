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
        <span style={{textAlign: "left", fontWeight: "bold", fontSize: "18px"}}>Subtotal: ${props.subtotal}</span>
        <Link to="/store/checkout" style={{width: "100%"}}><Button style={{background: "rgb(255, 196, 77)", color: "#000", width: "100%"}}>Terminar compra</Button></Link>
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
                <>
                    <BasketItem basket={basket} key={"key"} item={{name: "Culo 1", id: "321312", price: 1000.1, category: "?"}} />
                    <BasketItem basket={basket} key={"key"} item={{name: "Culo 2", id: "654654", price: 1000.1, category: "?"}} />
                    <BasketItem basket={basket} key={"key"} item={{name: "Culo 3", id: "987987", price: 1000.1, category: "?"}} />
                </>
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
                    <BasketFooter subtotal={basketTotal ? basketTotal : 0} />
                </Container>
            </div>
        )
    }
}