import { MenuItem } from '@chakra-ui/react'
import React from 'react'
type Props = {
  btnText: string
  onSelect: (text: string) => void
}
export const DropDownMenuItem = ({ btnText, onSelect }: Props) => {
  return (
    <MenuItem
      onClick={() => onSelect(btnText)}
      _hover={{ background: 'brand.grey100' }}
    >
      {btnText}
    </MenuItem>
  )
}