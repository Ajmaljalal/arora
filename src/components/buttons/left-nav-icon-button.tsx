import React from 'react'
import { Box } from '@chakra-ui/react'
import Link from 'next/link'


type LeftIconButtonProps = {
  text: string
  Icon: any
  isSelected: boolean
  onSelect?: (id) => void
}

export const LeftIconButton = ({ onSelect, text, Icon, isSelected }: LeftIconButtonProps) => {
  const route = text === 'Dashboard' ? '' : text.toLowerCase()
  const handleSelect = () => {
    onSelect(text)
  }
  return (
    <Link href={`/${route}`} passHref>
      <a>
        <Box
          onClick={handleSelect}
          as='button'
          display='flex'
          alignItems='center'
          lineHeight='1.2'
          minWidth='228px'
          transition='all 0.5s cubic-bezier(.08,.52,.52,1)'
          px='8px'
          py='10px'
          borderRadius='3px'
          fontSize='16px'
          fontWeight='500'
          bg={isSelected ? 'brand.primary' : ''}
          color='brand.white'
        >
          <Box mr='8px' ml='3px'>{Icon}</Box>
          {text}
        </Box>
      </a>
    </Link>
  )
}