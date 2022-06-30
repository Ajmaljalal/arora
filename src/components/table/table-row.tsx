import React from 'react'
import { Tr } from '@chakra-ui/react'


const TableRow = ({ children }) => {
  return (
    <Tr
      borderBottom='1px solid'
      borderColor='brand.grey200'
      _hover={{
        cursor: 'pointer',
        bg: 'brand.grey100',
        borderX: '1px solid',
        borderColor: 'brand.grey200'
      }}
    >
      {children}
    </Tr>
  )
}

export default TableRow