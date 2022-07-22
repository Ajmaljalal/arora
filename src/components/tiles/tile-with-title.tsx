import { Box, Heading } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type TileWithTitleProps = {
  title?: string
  bg?: string
  children: ReactNode
}

const TileWithTitle = ({ children, title, bg = 'brand.white' }: TileWithTitleProps) => {
  return (
    <Box w='100%' bg={bg} borderRadius='4px' p='16px'>
      {title && <Heading as='h2' fontSize='16px' fontWeight='600' mb='16px'>
        {title}
      </Heading>}
      {children}
    </Box>
  )
}

export default TileWithTitle