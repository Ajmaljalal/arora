import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'

type TileWithHeaderProps = {
  title: string
  body: JSX.Element
  headerLeft?: JSX.Element
}

const TileWithHeader = ({ title, headerLeft, body }: TileWithHeaderProps) => {
  return (
    <Box
      bg='brand.white'
      borderRadius='4px'
      width='100%'
    >
      <Flex justify='space-between' align='center' p='16px 24px' borderBottom='1px solid' borderColor='brand.grey200'>
        <Heading fontSize='18px' fontWeight='600'>{title}</Heading>
        <Box color='brand.primary' cursor='pointer'>{headerLeft}</Box>
      </Flex>
      <Box>
        {body}
      </Box>
    </Box>
  )
}
export default TileWithHeader