import React, { useState } from "react"
import { Box, Button, Menu, MenuButton, MenuList } from "@chakra-ui/react"
import ChevronDown from '../../../public/assets/icons/chevron-down.svg'
import { DropDownMenuItem } from "./components"


const clientsList = [
  'Zennify',
  'Goldman Sachs',
  'Google',
  'Uber'
]


const ClientsDropDown = () => {

  // TODO: put clientDropDownOption on global state
  const [clientDropDownOption, setclientDropDownOption] = useState('Select')

  const handleClientDropDownOptionChange = (option: string) => {
    setclientDropDownOption(option)
  }

  return (
    <Menu isLazy>
      <Box>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDown />}
          p='0 10px'
          borderRadius='3px'
          border='1px solid lightgray'
          _focus={{ boxShadow: "none !important" }}
        >
          {`Client: ${clientDropDownOption}`}
        </MenuButton>
      </Box>
      <MenuList bg='brand.white'>
        {clientsList.map(item => {
          return <DropDownMenuItem btnText={item} onSelect={handleClientDropDownOptionChange} />
        })}
      </MenuList>
    </Menu>
  )
}

export default ClientsDropDown