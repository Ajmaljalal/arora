import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../header/header'
const Body = ({ children }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      width='full'
      bg='brand.containerBackground'
      maxHeight='100vh'
      height='100vh'
      overflow='hidden'
    >
      <Header />
      <Box width='100%' overflowY='auto' height='100%'>{children}</Box>
    </Box>
  )
}

export default Body