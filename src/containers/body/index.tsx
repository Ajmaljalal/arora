import React from 'react'
import { Box } from '@chakra-ui/react'

const Body = ({ children }) => {
  return (
    <Box
      width='full'
      bg='brand.containerBackground'
      color='brand.black'
      p='20px 32px'
    >
      {children}
    </Box>
  )
}

export default Body
