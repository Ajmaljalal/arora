import React from 'react'
import { Box } from '@chakra-ui/react'


const FormWrapper = ({ children }) => {
  return (
    <Box maxHeight='400px' overflowY='auto' mb='10px'>
      {children}
    </Box>
  )
}

export default FormWrapper