import { Box } from '@chakra-ui/react'
import React from 'react'
import LeftNavBar from '../../containers/nav/index'
const Layout = ({ children }) => {
  return (
    <Box minHeight='100vh' display='flex'>
      <LeftNavBar />
      <Box width='100%'>{children}</Box>
    </Box>
  )
}

export default Layout