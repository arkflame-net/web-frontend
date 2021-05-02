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

var isOpen, onOpen, onClose, currentProduct, updateProduct;

export function openModal (product) {
    updateProduct(product);
    onOpen();
}

export function ProductModal (props) {
    const disclosure = useDisclosure();
    [currentProduct, updateProduct] = React.useState({});
    basket = props.basket;
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
            <ModalHeader>{currentProduct.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {currentProduct.description}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }