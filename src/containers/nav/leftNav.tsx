import React, { useState } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'

function LeftNav() {
  const textColor = useColorModeValue('brand.white', 'brand.white')
  const [currentMenuOption, setMenuOption] = useState(null)
  return (
    <Box
      maxWidth='260px'
      width='260px'
      height='100vh'
      bg='brand.black'
      color={textColor}
    >
    </Box>
  )
}

export default LeftNav