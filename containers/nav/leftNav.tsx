import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function LeftNav() {
  const borderBottomColor = useColorModeValue('lightgray', 'grey')
  const textColor = useColorModeValue('brand.white', 'brand.white')
  return (
    <Box
      minWidth='200px'
      height='100vh'
      bg='brand.primary'
      color={textColor}
    >
    </Box>
  )
}

export default LeftNav