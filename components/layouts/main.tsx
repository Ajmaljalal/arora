import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Main({children}) {
  return (
    <Box 
        minHeight='100vh'
        display='flex'
        flexDirection='column'
    >
        {children}
    </Box>
  )
}
