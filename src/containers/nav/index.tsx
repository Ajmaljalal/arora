import React, { useEffect, useState } from 'react'
import { Box, Heading, useColorModeValue, VStack, Text, Link } from '@chakra-ui/react'
import { LeftIconButton } from '../../components/buttons/left-nav-icon-button'
import { NavItem, RecruiterNavItems } from './utils'
import { useDispatch, useSelector } from '../../store/store'
import {
  changePage,
  selectNav
} from '../../store/nav';


const LeftNavBar = () => {
  const textColor = useColorModeValue('brand.white', 'brand.white')
  const currentPage = useSelector(selectNav);
  return (
    <Box
      maxWidth='260px'
      minWidth='260px'
      width='260px'
      height='100vh'
      bg='brand.black'
      color={textColor}
    >
      {renderLogo()}
      <VStack marginTop='20px'>
        {renderNavItems(RecruiterNavItems.quick, currentPage)}
        {renderSectionTitle('Workspace')}
        {renderNavItems(RecruiterNavItems.workspace, currentPage)}
        {renderSectionTitle('More')}
        {renderNavItems(RecruiterNavItems.more, currentPage)}
      </VStack>
    </Box>
  )
}




const renderLogo = () => {
  return (
    <Box border='1px solid transparent'>
      <Heading
        as='h1'
        size='lg'
        color='brand.white'
        margin='10px 25px'>
        Talentour
      </Heading>
    </Box>
  )
}
const renderNavItems = (navItems: NavItem[], currentPage: string) => {
  const dispatch = useDispatch();
  return (
    navItems.map(navItem => {
      return (
        <LeftIconButton
          key={navItem.text}
          text={navItem.text}
          isSelected={currentPage === navItem.text}
          Icon={navItem.Icon}
          onSelect={() => dispatch(changePage(navItem.text))}
        />
      )
    })
  )
}

const renderSectionTitle = (text: string) => {
  return (
    <Box width='full' pt='3'>
      <Text
        textColor='brand.grey500'
        size='sm'
        textAlign='left'
        marginLeft='28px'
      >
        {text}
      </Text>
    </Box>
  )
}

export default LeftNavBar