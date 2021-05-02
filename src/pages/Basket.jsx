import React from "react";
import {
  chakra,
  Flex,
  Button,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";

function BasketItem ({name, price, category, quantity, id}) {
    return (
            <Flex direction={{ base: "row", sm: "column" }} bg="#424853" color="#fff">
              <SimpleGrid spacingY={3} columns={{ base: 1, sm: 6 }} w="full" py={2} px={10} fontWeight="hairline">
                <span>{name}</span>
                <chakra.span textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">${price}</chakra.span>
                <chakra.span textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">{category}</chakra.span>
                <chakra.span textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">{quantity}</chakra.span>
                <chakra.span textOverflow="ellipsis" overflow="hidden" whiteSpace="nowrap">{quantity * price}</chakra.span>
                <span>
                    <Button variant="solid" style={{"display": "inline-block", "margin": "1px 5px"}} colorScheme="red" size="sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </Button>
                    <Button variant="solid" style={{"display": "inline-block", "margin": "1px 5px"}} colorScheme="orange" size="sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg>
                    </Button>
                </span>
              </SimpleGrid>
            </Flex>
    );
}

export function BasketFooter (props) {
    return (<SimpleGrid
        spacingY={3}
        columns={{ base: 1, sm: 1 }}
        w={{ base: 100, sm: "full" }}
        textTransform="uppercase"
        bg="#313742"
        color="#fff"
        py={{ base: 1, sm: 4 }}
        px={{ base: 2, sm: 10 }}
        fontSize="sm"
        fontWeight="hairline"
    >
        <span>Subtotal: $99.999.99</span>
    </SimpleGrid>
    );
}

export function BasketHeader (props) {
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

export default function Basket(props) {
  return (
    <Stack
        direction={{ base: "column" }}
        w="full"
        bg="#3b414c"
        shadow="lg"
      >
        <BasketHeader/>
        <BasketItem name="Test Product" price={5.25} category="Test" quantity={5}/>
        <BasketItem name="Another Product" price={3} category="And" quantity={1}/>
        <BasketItem name="LOL Product" price={99} category="Another" quantity={53}/>
        <BasketItem name="IDK Product" price={12.5} category="Test" quantity={7}/>
        <BasketFooter/>
      </Stack>
  );
}