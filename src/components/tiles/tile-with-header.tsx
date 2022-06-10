import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

type TileWithHeaderProps = {
  title: string
}

const TileWithHeader = ({ title }: TileWithHeaderProps) => {
  return (
    <Box
      bg='brand.white'
      borderRadius='4px'
      maxWidth='548px'
    >
      <Box>
        <Heading>{title}</Heading>
      </Box>
    </Box>
  )
}
export default TileWithHeader