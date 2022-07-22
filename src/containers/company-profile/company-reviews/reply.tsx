import React from 'react'
import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react'
import { ReplyObj } from '../utils/objects'

type replyProps = {
  reply: ReplyObj
}

const Reply = ({ reply }: replyProps) => {

  const renderReplyHeader = (reply: ReplyObj) => {
    return (
      <HStack>
        <Avatar name={reply.sender.name} width='45px' height='45px' />
        <VStack alignItems='flex-start' spacing={0}>
          <Text fontWeight='600'>{reply.sender.name}</Text>
          <Box as='time' color='brand.grey400' fontSize='14px'>{reply.date}</Box>
        </VStack>
      </HStack>
    )
  }
  return (
    <VStack
      alignItems='flex-start'
      p='8px 16px'
      _first={{ borderTop: '1px solid', borderColor: 'brand.grey200', paddingTop: '16px' }}
    >
      {renderReplyHeader(reply)}
      <Text width='fit-content'>
        {reply.text}
      </Text>
    </VStack>
  )
}

export default Reply