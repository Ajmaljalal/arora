import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../../../containers/header/header'
import BodyContent from './body-content'
const BodyLayout = ({ children }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      width='full'
      bg='brand.containerBackground'
      maxHeight='100vh'
      height='100vh'
      overflow='hidden'
    >
      <Header />
      <Box width='100%' overflowY='auto' height='100%'>
        <BodyContent>
          {children}
        </BodyContent>
      </Box>
    </Box>
  )
}

export default BodyLayout