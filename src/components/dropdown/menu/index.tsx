import { Box, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { DropDownMenuItem } from './dropdown-item'

type ItemObj = {
  element: JSX.Element | string
  action?: () => void
  href?: string
}

type DropdownMenuProps = {
  items: ItemObj[]
  triggerBtn: JSX.Element
  width?: string
}

const DropdownMenu = ({ items, triggerBtn }: DropdownMenuProps) => {
  return (
    <Box>
      <Menu isLazy>
        <MenuButton>{triggerBtn}</MenuButton>
        <MenuList
          bg='brand.white'
          boxShadow='none'
          border='1px solid'
          borderColor='brand.grey300'
          p='0'
          maxHeight='300px'
          overflowY='auto'
          ringOffset='30px'
          zIndex='2000'
        >
          {items.map((item, index) => {
            if (item.action) {
              return <DropDownMenuItem key={index} btnText={item.element} onSelect={item.action} />
            } else {
              return <Link href={item.href} passHref key={index}><a><DropDownMenuItem key={index} btnText={item.element} /></a></Link>
            }
          })}
        </MenuList>
      </Menu>
    </Box>
  )
}

export default DropdownMenu