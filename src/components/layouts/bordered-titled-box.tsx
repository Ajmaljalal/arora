import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type BorderedTitledBoxProps = {
  children: ReactNode
  title?: string
  bg?: string
  titleColor?: string
}

const BorderedTitledBox = ({ title, titleColor, children, bg = '' }: BorderedTitledBoxProps) => {
  return (
    <Box
      p='16px'
      pt={title && '25px'}
      mt='12px'
      border='1px solid'
      borderColor='brand.grey200'
      borderRadius='4px'
      position='relative'
      bg={bg.length ? bg : 'none'}
      flex={1}
      _after={title && {
        content: `'${title}'`,
        background: 'brand.white',
        border: '1px solid',
        borderColor: titleColor ? titleColor : 'brand.grey200',
        position: 'absolute',
        top: '-13px',
        left: '16px',
        p: '2px 8px',
        width: 'fit-content',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '500',
        color: titleColor ? titleColor : 'brand.black',
        borderRadius: '15px'
      }}
    >
      {children}
    </Box>
  )
}

export default BorderedTitledBox