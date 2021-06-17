import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from "@chakra-ui/react"
//import { createPurchase } from "../../services/purchaseService";

var isOpen, onOpen, onClose;

export function openModal () {
    onOpen();
}

export function CheckoutModal ({ basket }) {
    const disclosure = useDisclosure();
    isOpen = disclosure.isOpen;
    onOpen = disclosure.onOpen;
    onClose = disclosure.onClose;

    return (
      <>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>¡Ya casi!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>Estás por finalizar tu compra en la tienda de ArkFlame.</p>
              <p>¿Con qué vas a pagar?</p>
            </ModalBody>
            <ModalFooter>
                <p><Button colorScheme="yellow" style={{marginRight: "10px"}} onClick={() => { /*createPurchase("", "mp", basket.getItems())*/ }}>MercadoPago</Button></p>
                <p><Button colorScheme="blue" onClick={() => { /*createPurchase("", "pp", basket.getItems())*/ }}>PayPal</Button></p>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }