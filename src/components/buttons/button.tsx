import React from 'react'
import { Button } from '@chakra-ui/react'

export type BaseButtonProps = {
  text: string
  color: string
  borderColor?: string
  outlined?: boolean
  bg?: string
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  onClick?: (arg?: any) => void
}

export const BaseButton = ({
  text,
  color,
  outlined = false,
  icon,
  iconPosition = 'left',
  bg,
  borderColor,
  onClick
}: BaseButtonProps) => {
  return (
    <Button
      background={!outlined ? bg : 'transparent'}
      variant={outlined ? 'outline' : 'solid'}
      color={color}
      height='38px'
      minWidth='80px'
      leftIcon={iconPosition === 'left' ? icon : null}
      rightIcon={iconPosition === 'right' ? icon : null}
      iconSpacing='5px'
      onClick={onClick}
      borderColor={outlined ? borderColor : bg}
      borderRadius='4px'
      _focus={{ shadow: "none !important", color: color, bg: bg }}
      _hover={{ background: outlined ? 'transparent' : bg }}
    >
      {text}
    </Button>
  )
}