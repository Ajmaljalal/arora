import React from 'react'
import { Tab } from '@chakra-ui/react'

type TabProps = {
  text: string
}
const TabHeader = ({ text }: TabProps) => {
  return (
    <Tab
      p='0 4px 4px 4px'
      mr='40px'
      color='brand.grey400'
      _focus={{ shadow: 'none' }}
      _selected={{ color: 'brand.black', borderBottom: '3px solid', borderColor: 'brand.primary', borderRadius: '3px' }}
    >
      {text}
    </Tab>
  )
}

export default TabHeader