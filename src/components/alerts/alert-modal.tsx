import React from "react"
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react"

type AlertModalProps = {
  title: string
  content: JSX.Element | string
  onClose: () => void
  isOpen: boolean
  footerBtns: string[]
}
const AlertModal = ({ title, content, onClose, isOpen, footerBtns }: AlertModalProps) => {
  const cancelRef = React.useRef()

  return (
    <AlertDialog
      motionPreset='slideInBottom'
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      closeOnOverlayClick={false}
    // isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          {content}
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            {footerBtns[0]}
          </Button>
          <Button bg='brand.red' color='brand.white' ml={3}>
            {footerBtns[1]}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertModal