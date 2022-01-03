import React, { ReactElement } from 'react'
import { Box } from '@chakra-ui/react'

type LeftIconButtonProps = {
  text: string
  Icon: any
  isSelected: boolean
  onSelect?: (id: string) => void
}

export const LeftIconButton = ({ onSelect, text, Icon, isSelected }: LeftIconButtonProps) => {
  const handleSelect = () => {
    onSelect(text)
  }
  return (
    <Box
      onClick={handleSelect}
      as='button'
      display='flex'
      alignItems='center'
      lineHeight='1.2'
      minWidth='170px'
      transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
      py='8px'
      px='5px'
      borderRadius='3px'
      fontSize='14px'
      fontWeight='semibold'
      bg={isSelected ? 'brand.yellow' : ''}
      color={isSelected ? 'brand.primary' : 'brand.white'}
      // _hover={{
      //   bg: 'brand.yellow',
      //   color: 'brand.primary',
      // }}
      _focus={{
        bg: 'brand.yellow',
        color: 'brand.primary',
      }}
    >
      <Box mr='8px' ml='3px'>{Icon}</Box>
      {text}
    </Box>
  )
}