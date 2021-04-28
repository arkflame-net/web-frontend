import styles from "./product.module.sass";

import React from "react";
import { chakra, Box, Image, Flex, useColorModeValue } from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/react"

export default function Product ({image, name, price, description}) {
    const isLoading = !name || !price || !description;
    
    return (
        <div className={styles["product"]}>
            <Box
                maxW="xs"
                mx="auto"
                bg={useColorModeValue("white", )}
                shadow="lg"
                rounded="lg"
            >
                <Box px={4} py={2}>
                <chakra.h1
                    color={useColorModeValue("gray.800", "white")}
                    fontWeight="bold"
                    fontSize="3xl"
                    textTransform="uppercase"
                >
                    {isLoading && <Skeleton height="10px"/>}
                    {name}
                </chakra.h1>
                <chakra.p
                    mt={1}
                    fontSize="sm"
                    color={useColorModeValue("gray.600", "gray.400")}
                >
                    {isLoading && <Skeleton height="10px"/>}
                    {description}
                </chakra.p>
                </Box>
                {
                    isLoading && <Skeleton height="150px"/>
                }

                {
                    !isLoading && <Image h={48} w="full" fit="cover" mt={2} src={image} alt={name} />
                }
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    px={4}
                    py={2}
                    bg="gray.900"
                    roundedBottom="lg"
                >
                {
                    !isLoading && (
                        <React.Fragment>
                            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">${price}</chakra.h1>
                            <chakra.button
                                px={2}
                                py={1}
                                bg="#FFC44D"
                                fontSize="xs"
                                color="#000"
                                fontWeight="bold"
                                rounded="lg"
                                textTransform="uppercase"
                                _hover={{
                                bg: "gray.200",
                                }}
                                _focus={{
                                bg: "gray.400",
                                }}
                            > Añadir al carrito
                            </chakra.button>
                        </React.Fragment>
                    )
                }
                
                </Flex>
            </Box>
        </div>
    );
};