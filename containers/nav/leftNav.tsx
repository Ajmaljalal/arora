import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { LeftIconButton } from '../../components/buttons/left-icon-button'

function LeftNav() {
  const textColor = useColorModeValue('brand.white', 'brand.white')
  return (
    <Box
      minWidth='200px'
      height='100vh'
      bg='brand.primary'
      color={textColor}
    >
      <LeftIconButton text='Home' color='brand.yellow' width='170px' />
    </Box>
  )
}

export default LeftNav