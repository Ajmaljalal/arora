import React from 'react'
import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import { MessageObj } from './utils/objects'

type MessageProps = {
  message: MessageObj
}

const Message = ({ message }: MessageProps) => {
  return (
    <HStack alignItems='flex-start' spacing={4}>
      <Avatar name={message.sender.name} size='md' />
      <Box>
        <HStack>
          <Text fontWeight='600'>{message.sender.name}</Text>
          <Box as='time' color='brand.grey400' fontSize='14px'>{message.date}</Box>
        </HStack>
        <Text>{message.messageText}</Text>
      </Box>
    </HStack>
  )
}

export default Message