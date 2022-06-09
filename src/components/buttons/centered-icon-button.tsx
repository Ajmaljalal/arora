import { background, IconButton } from '@chakra-ui/react';
import React from 'react';

export interface CenteredIconButtonProps {
  Icon: JSX.Element
  bg?: string
  isRound?: boolean
  isOutlined?: boolean
  borderColor?: string
  onClick: () => void
}

export const CenteredIconButton = ({
  bg = 'brand.white',
  Icon,
  isRound = false,
  isOutlined,
  borderColor,
  onClick
}: CenteredIconButtonProps) => {
  return (
    <IconButton
      aria-label='icon-button'
      bg={bg}
      icon={Icon}
      height='40px'
      width='40px'
      isRound={isRound}
      borderRadius={!isRound ? '3px' : '50%'}
      border={isOutlined ? `1px solid ${borderColor}` : 'none'}
      _focus={{ boxShadow: "none !important", background: bg }}
      _hover={{ background: bg }}
      onClick={onClick}
    />
  );
}
