import React, { ReactNode } from 'react'
import { Tr } from '@chakra-ui/react'

type TableRowProps = {
  hoverBg?: string
  children: ReactNode
}


const TableRow = ({ children, hoverBg }: TableRowProps) => {
  return (
    <Tr
      borderBottom='1px solid'
      borderColor='brand.grey200'
      borderX='1px solid transparent'
      _hover={{
        cursor: 'pointer',
        bg: { hoverBg },
        borderLeft: '1px solid',
      }}
    >
      {children}
    </Tr>
  )
}

export default TableRow