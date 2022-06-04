import { IconButton } from '@chakra-ui/react';
import React from 'react';

export interface CenteredIconButtonProps {
  bg?: string
  Icon: JSX.Element
  isRound?: boolean
  onClick: () => void
}

export const CenteredIconButton = ({ bg = 'brand.white', Icon, isRound = false, onClick }: CenteredIconButtonProps) => {
  return (
    <IconButton
      color='green'
      aria-label='icon-button'
      bg={bg}
      icon={Icon}
      size='sm'
      isRound={isRound}
      borderRadius={!isRound ? '3px' : '50%'}
      _focus={{ boxShadow: "none !important" }}
      _hover={{ background: 'transparent' }}
    />
  );
}
