import React from 'react'
import { Box } from '@chakra-ui/react'


const PageContentWrapper = ({ children }) => {
  return (
    <Box mt='20px' overflow='hidden' height='100%'>
      {children}
    </Box>
  )
}

export default PageContentWrapper