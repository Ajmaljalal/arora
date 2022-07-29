import React from 'react'
import { Button, ButtonProps } from '@chakra-ui/react'

export type BaseButtonProps = {
  text: string
  color: string
  borderColor?: string
  bg?: string
} & ButtonProps

export const BaseButton = ({
  text,
  color,
  bg = 'transparent',
  borderColor,
  isFullWidth,
  ...props
}: BaseButtonProps) => {
  return (
    <Button
      bg={bg}
      color={color}
      height='38px'
      minWidth={isFullWidth ? 'full' : '80px'}
      iconSpacing='5px'
      borderColor={borderColor ? borderColor : bg}
      borderRadius='4px'
      _focus={{ shadow: "none !important", color: color, bg: bg }}
      _hover={{ background: bg }}
      _active={{ background: bg }}
      {...props}
    >
      {text}
    </Button>
  )
}