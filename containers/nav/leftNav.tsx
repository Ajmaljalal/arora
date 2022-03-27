import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function LeftNav() {
  const borderBottomColor = useColorModeValue('lightgray', 'grey')
  return (
    <Box
      minWidth='250px'
      height='90vh'
      borderRight={`0.5px solid ${borderBottomColor}`}
    >
      here
    </Box>
  )
}

export default LeftNav