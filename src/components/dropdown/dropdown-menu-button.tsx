import React from 'react'
import { Button, MenuButton } from '@chakra-ui/react'
import ChevronDown from '../../../public/assets/icons/chevron-down.svg'

type DropdownMenuButtonProps = {
  text: string
}

const DropdownMenuButton = ({ text }: DropdownMenuButtonProps) => {
  return (
    <MenuButton
      as={Button}
      rightIcon={<ChevronDown />}
      p='0 10px'
      height='44px'
      borderRadius='3px'
      border='1px solid'
      borderColor='brand.grey200'
      minWidth='250px'
      textAlign='start'
      fontWeight='400'
      _focus={{ boxShadow: "none !important" }}
    >
      {text}
    </MenuButton>
  )
}

export default DropdownMenuButton