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

var isOpen, onOpen, onClose;

export function openModal (product) {
    updateProduct(product);
    onOpen();
}

export function GenericModal ({ action, title, description, blueButtonText }) {
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
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {description}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={() => { action }}>{blueButtonText ? blueButtonText : "OK"}</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }