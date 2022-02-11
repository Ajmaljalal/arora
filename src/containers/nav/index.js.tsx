import React, { useState } from 'react'
import { Box, Divider, Heading, useColorModeValue, VStack } from '@chakra-ui/react'
import { LeftIconButton } from '../../components/buttons/left-nav-icon-button'
import { Dashboard } from '../../../public/assets/icons/dashboard'

function LeftNavBar() {
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
      <Box border='1px solid transparent'>
        <Heading as='h1' size='lg' color='brand.secondary' margin='10px 25px'>Talentour</Heading>
      </Box>
      <VStack marginTop='20px'>
        <LeftIconButton
          text='Home'
          isSelected={true}
          Icon={<Dashboard />}
          onSelect={() => console.log('clicked')}
        />
        <LeftIconButton
          text='Messages'
          isSelected={true}
          Icon={<Dashboard />}
          onSelect={() => console.log('clicked')}
        />
        <Divider bg='brand.grey' />
        <LeftIconButton
          text='Dashboard'
          isSelected={true}
          Icon={<Dashboard />}
          onSelect={() => console.log('clicked')}
        />
        <LeftIconButton
          text='Jobs'
          isSelected={true}
          Icon={<Dashboard />}
          onSelect={() => console.log('clicked')}
        />
        <LeftIconButton
          text='Candidates'
          isSelected={true}
          Icon={<Dashboard />}
          onSelect={() => console.log('clicked')}
        />
        <Divider bg='brand.grey' />
        <LeftIconButton
          text='Settings'
          isSelected={true}
          Icon={<Dashboard />}
          onSelect={() => console.log('clicked')}
        />
      </VStack>
    </Box>
  )
}

export default LeftNavBar