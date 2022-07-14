import { Menu, MenuList } from '@chakra-ui/react'
import React from 'react'
import DropdownMenuButton from './dropdown-menu-button'
import { DropDownMenuItem } from './dropdown-menu-item'

type Props = {
  selectedItem: string
  items: string[]
  onSelectItem: (option: string) => void
  width?: string
}

const DropdownList = ({ selectedItem, items, onSelectItem, width = '150px' }: Props) => {
  return (
    <Menu isLazy>
      <DropdownMenuButton text={selectedItem} width={width} />
      <MenuList
        bg='brand.white'
        boxShadow='none'
        minWidth={width}
        border='1px solid'
        borderColor='brand.grey300'
        p='0'
        overflowY='auto'
      >
        {items.map(item => {
          return <DropDownMenuItem key={item} btnText={item} onSelect={onSelectItem} />
        })}
      </MenuList>
    </Menu>
  )
}

export default DropdownList
