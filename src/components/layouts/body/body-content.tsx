import React from 'react'
import { Box } from '@chakra-ui/react'

const BodyContent = ({ children }) => {
  return (
    <Box
      width='full'
      maxWidth='1436px'
      height='100%'
      color='brand.black'
      p='25px 32px 25px 32px'
      margin='0 auto'
      overflow='hidden'
    >
      {children}
    </Box>
  )
}

export default BodyContent
