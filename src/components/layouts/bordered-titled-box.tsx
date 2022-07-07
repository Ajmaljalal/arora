import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type BorderedTitledBoxProps = {
  children: ReactNode
  title: string
}

const BorderedTitledBox = ({ title, children }: BorderedTitledBoxProps) => {
  return (
    <Box
      p='10px'
      pt='20px'
      mt='10px'
      border='1px solid'
      borderColor='brand.grey200'
      borderRadius='4px'
      position='relative'
      flex={1}
      _after={{
        content: `'${title}'`,
        background: 'brand.grey200',
        position: 'absolute',
        top: '-10px',
        left: '10px',
        width: '60px',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '500',
        color: 'brand.grey400',
        borderRadius: '10px'
      }}
    >
      {children}
    </Box>
  )
}

export default BorderedTitledBox