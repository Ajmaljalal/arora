import { Box, BoxProps, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

type HideableWrapperProps = {
  hide: boolean
} & BoxProps

const HideableWrapper = ({ children, hide = false, ...props }: HideableWrapperProps) => {
  const [isMeduimScreen] = useMediaQuery('(max-width: 1100px)')
  const isHidden = hide && isMeduimScreen
  return (
    isHidden ? <Box display='none' {...props}>{children}</Box> : <Box {...props}>{children}</Box>
  )
}

export default HideableWrapper