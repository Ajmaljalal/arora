import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/react'
import React from 'react'

type CustomTagProps = {
  text: string
  color: string
  bg: string
  size?: string
  onClick?: (text: string) => void
}

const CustomTag = ({ text, color, bg, size = 'md', onClick = null }: CustomTagProps) => {
  const handleDelete = () => {
    onClick(text)
  }
  return (
    <Tag
      size={size}
      key={text}
      borderRadius='full'
      variant='solid'
      color={color}
      bg={bg}
      p='6px 14px'
    >
      <TagLabel>{text}</TagLabel>
      {onClick && <TagCloseButton onClick={handleDelete} _focus={{ shadow: 'none' }} />}
    </Tag>
  )
}

export default CustomTag