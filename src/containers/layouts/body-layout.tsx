import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../header/header'
const BodyLayout = ({ children }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      width='full'
      bg='brand.containerBackground'
      height='100vh'
    >
      <Header />
      <Box width='100%'>{children}</Box>
    </Box>
  )
}

export default BodyLayout