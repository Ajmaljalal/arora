import { MenuItem } from '@chakra-ui/react'
import React from 'react'
type Props = {
  btnText: JSX.Element | string
  onSelect?: () => void
}
export const DropDownMenuItem = ({ btnText, onSelect }: Props) => {
  if (onSelect) {
    return (
      <MenuItem
        onClick={() => onSelect()}
        _hover={{ background: 'brand.grey100' }}
      >
        {btnText}
      </MenuItem>
    )
  } else {
    return (
      <MenuItem>
        {btnText}
      </MenuItem>
    )
  }
}