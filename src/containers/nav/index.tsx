import React, { useState } from 'react'
import { Box, Heading, useColorModeValue, VStack, Text } from '@chakra-ui/react'
import { LeftIconButton } from '../../components/buttons/left-nav-icon-button'
import { NavItem, RecruiterNavItems } from './utils'



const renderNavItems = (navItems: NavItem[]) => {
  return (
    navItems.map(navItem => {
      return (
        <LeftIconButton
          text={navItem.text}
          isSelected={true}
          Icon={navItem.Icon}
          onSelect={() => console.log('clicked')}
        />
      )
    })
  )
}

const renderLogo = () => {
  return (
    <Box border='1px solid transparent'>
      <Heading
        as='h1'
        size='lg'
        color='brand.secondary'
        margin='10px 25px'>
        Talentour
      </Heading>
    </Box>
  )
}

const renderSectionTitle = (text: string) => {
  return (
    <Box width='full' pt='3'>
      <Text
        textColor='brand.grey'
        size='sm'
        textAlign='left'
        marginLeft='28px'
      >
        {text}
      </Text>
    </Box>
  )
}

const LeftNavBar = () => {
  const textColor = useColorModeValue('brand.white', 'brand.white')
  const [currentMenuOption, setMenuOption] = useState(null)
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
        {renderNavItems(RecruiterNavItems.quick)}
        {renderSectionTitle('Workspace')}
        {renderNavItems(RecruiterNavItems.workspace)}
        {renderSectionTitle('More')}
        {renderNavItems(RecruiterNavItems.more)}
      </VStack>
    </Box>
  )
}

export default LeftNavBar