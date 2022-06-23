import React from 'react'
import { Box } from '@chakra-ui/react'


const FormWrapper = ({ children, height = '400px' }) => {
  return (
    <Box maxHeight={height} overflowY='auto' mb='10px' pt='10px'>
      {children}
    </Box>
  )
}

export default FormWrapper