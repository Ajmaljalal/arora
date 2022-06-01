import React, { ReactElement } from 'react'
import { Box } from '@chakra-ui/react'

type LeftIconButtonProps = {
  text: string
  icon?: string
  color: string,
  width: string,
}

export const LeftIconButton = ({ text, icon, color, width }: LeftIconButtonProps) => {
  return (
    <Box
      as='button'
      display='flex'
      lineHeight='1.2'
      minWidth={width}
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      py='8px'
      px='5px'
      borderRadius='3px'
      fontSize='14px'
      fontWeight='semibold'
      color='brand.white'
      _hover={{
        bg: color,
        color: 'brand.primary',
        transform: 'scale(0.98)',

      }}
      _focus={{
        transform: 'scale(0.98)',
        bg: color,
        color: 'brand.primary',
      }}
    >
      {text}
    </Box>
  )
}