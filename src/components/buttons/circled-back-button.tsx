import React from 'react'
import { Box } from '@chakra-ui/react'
import ChevronLeftIcon from '../../../public/assets/icons/chevron-left.svg'

type CircledBackButton = {
  onClick: () => void
}

const CircledBackButton = ({ onClick }: CircledBackButton) => {
  return (
    <Box
      w='32px'
      h='32px'
      borderRadius='50%'
      bg='brand.white'
      mr='24px'
      ml='-4px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      border='1px solid'
      borderColor='brand.grey200'
      cursor='pointer'
      onClick={onClick}
    >
      <ChevronLeftIcon />
    </Box>
  )
}

export default CircledBackButton