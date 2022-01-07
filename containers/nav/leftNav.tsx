import React, { useState } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { LeftIconButton } from '../../components/buttons/left-nav-icon-button'
import { Dashboard } from '../../public/assets/icons/dashboard'

function LeftNav() {
  const textColor = useColorModeValue('brand.white', 'brand.white')
  const [currentMenuOption, setMenuOption] = useState('Home')
  return (
    <Box
      minWidth='200px'
      height='100vh'
      bg='brand.primary'
      color={textColor}
    >
      <LeftIconButton
        text='Home'
        Icon={<Dashboard color={currentMenuOption === 'Home' ? '' : 'white'} />}
        onSelect={(text) => setMenuOption(text)}
        isSelected={currentMenuOption === 'Home'}
      />
    </Box>
  )
}

export default LeftNav