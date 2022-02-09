import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../header/header'
const BodyLayout = ({ children }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      width='full'
      bg='brand.containerBackground'
      height='100vh'
    >
      <Header />
      <main>{children}</main>
    </Box>
  )
}

export default BodyLayout