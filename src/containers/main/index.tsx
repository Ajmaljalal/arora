import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from '../header/header'


function MainContainer() {
  return (
    <Box display='flex' flexDirection='column' width='full' bg='brand.secondary'>
      <Header />
    </Box>
  )
}

export default MainContainer