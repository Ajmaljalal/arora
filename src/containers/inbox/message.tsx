import React from 'react'
import { Avatar, background, Box, HStack, Text } from '@chakra-ui/react'
import { MessageObj } from './utils/objects'

type MessageProps = {
  message: MessageObj
}

const Message = ({ message }: MessageProps) => {
  return (
    <HStack alignItems='flex-start' spacing={4} mt='16px'>
      <Avatar name={message.sender.name} width='45px' height='45px' />
      <Box>
        <HStack>
          <Text fontWeight='600'>{message.sender.name}</Text>
          <Box as='time' color='brand.grey400' fontSize='14px'>{message.date}</Box>
        </HStack>
        <Text
          // bg={message.sender.id === 'senderMeid' ? 'brand.grey100' : 'brand.grey200'}
          // p='4px 8px'
          // borderRadius='8px'
          // borderTopStartRadius='0'
          color={message.sender.id === 'senderMeid' ? 'brand.primary' : 'brand.black'}
          width='fit-content'
        // minWidth='50px'
        >
          {message.messageText}
        </Text>
      </Box>
    </HStack>
  )
}

export default Message