import { Th, TypographyProps } from '@chakra-ui/react'
import React from 'react'

type TableHeaderItemProps = {
  text: string
  textAlign?: TypographyProps['textAlign']
}

const TableHeaderItem = ({ text, textAlign }: TableHeaderItemProps) => {
  return (
    <Th color='brand.grey500' textAlign={textAlign}>
      {text}
    </Th>
  )
}

export default TableHeaderItem