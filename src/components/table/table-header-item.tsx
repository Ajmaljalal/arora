import React from 'react'
import { HStack, Th, TypographyProps, Text } from '@chakra-ui/react'
import ArrowUpDownIcon from '../../../public/assets/icons/arrow-up-down.svg'
type TableHeaderItemProps = {
  text: string
  textAlign?: TypographyProps['textAlign']
  orderIcon?: boolean
}

const TableHeaderItem = ({ text, textAlign, orderIcon = true }: TableHeaderItemProps) => {
  return (
    <Th
      color='brand.black'
      textAlign={textAlign}
      fontSize='14px'
    >
      <HStack minWidth='100%' justifyContent={textAlign}>
        <Text>{text}</Text>
        {orderIcon && <ArrowUpDownIcon />}
      </HStack>
    </Th>
  )
}

export default TableHeaderItem