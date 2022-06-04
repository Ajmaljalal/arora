import React from 'react'
import { Button } from '@chakra-ui/react'

export type BaseButtonProps = {
  text: string
  color: string
  outlined?: boolean
  bg?: string
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  onClick: () => void
}

export const BaseButton = ({
  text,
  color,
  outlined = false,
  icon,
  iconPosition = 'left',
  bg,
  onClick
}: BaseButtonProps) => {
  return (
    <Button
      background={!outlined ? bg : 'transparent'}
      variant={outlined ? 'outline' : 'solid'}
      color={color}
      px='20px'
      height='2.2rem'
      leftIcon={iconPosition === 'left' ? icon : null}
      rightIcon={iconPosition === 'right' ? icon : null}
      iconSpacing='5px'
      onClick={onClick}
      borderColor={outlined ? color : bg}
      borderRadius='3px'
      _focus={{ boxShadow: "none !important" }}
      _hover={{ background: outlined ? 'transparent' : bg }}
    >
      {text}
    </Button>
  )
}