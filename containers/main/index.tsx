import { Box } from '@chakra-ui/react'
import React from 'react'
import LeftNav from '../nav/leftNav'

function MainContainer() {
  return (
    <Box
      display='flex'
    >
      <LeftNav />
    </Box>
  )
}

export default MainContainer