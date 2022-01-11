import React, { useState } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { CenteredIconButton } from '../../components/buttons/centered-icon-button'
import { Bell } from '../../public/assets/icons/bell'

function LeftNav() {
  const textColor = useColorModeValue('brand.white', 'brand.white')
  const [currentMenuOption, setMenuOption] = useState(null)
  return (
    <Box
      minWidth='200px'
      height='100vh'
      bg='brand.primary'
      color={textColor}
    >
      <CenteredIconButton
        Icon={<Bell color='gray' />}
        onClick={() => console.log('clicked')}
      />
    </Box>
  )
}

export default LeftNav