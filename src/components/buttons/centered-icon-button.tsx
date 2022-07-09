import { IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export interface CenteredIconButtonProps {
  Icon: JSX.Element
  href?: string
  bg?: string
  isRound?: boolean
  isOutlined?: boolean
  borderColor?: string
  onClick?: () => void
}

export const CenteredIconButton = ({
  bg = 'brand.white',
  Icon,
  isRound = false,
  isOutlined,
  borderColor,
  onClick,
  href
}: CenteredIconButtonProps) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <a>
          <IconButton
            aria-label='icon-button'
            bg={bg}
            icon={Icon}
            height='32px'
            minWidth='32px'
            width='32px'
            maxWidth='32px'
            isRound={isRound}
            borderRadius={!isRound ? '3px' : '50%'}
            border={isOutlined ? `1px solid ${borderColor}` : 'none'}
            _focus={{ boxShadow: "none !important", background: bg }}
            _hover={{ background: bg }}
          />
        </a>
      </Link>
    );
  } else {
    return (
      <IconButton
        aria-label='icon-button'
        bg={bg}
        icon={Icon}
        height='32px'
        minWidth='32px'
        isRound={isRound}
        borderRadius={!isRound ? '3px' : '50%'}
        border={isOutlined ? `1px solid ${borderColor}` : 'none'}
        _focus={{ boxShadow: "none !important", background: bg }}
        _hover={{ background: bg }}
        onClick={onClick}
      />
    );
  }
}
