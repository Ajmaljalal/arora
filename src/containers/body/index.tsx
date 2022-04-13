import React from 'react'
import { Box } from '@chakra-ui/react'

const BodyContent = ({ children }) => {
  return (
    <Box
      width='full'
      maxWidth='1236px'
      bg='brand.containerBackground'
      color='brand.black'
      p='32px 32px 20px 32px'
      margin='0 auto'
    >
      {children}
    </Box>
  )
}

export default BodyContent
