import { Th, TypographyProps } from '@chakra-ui/react'
import React from 'react'

type TableHeaderItemProps = {
  text: string
  textAlign?: TypographyProps['textAlign']
}

const TableHeaderItem = ({ text, textAlign }: TableHeaderItemProps) => {
  return (
    <Th color='brand.black' textAlign={textAlign} fontSize='14px'>
      {text}
    </Th>
  )
}

export default TableHeaderItem