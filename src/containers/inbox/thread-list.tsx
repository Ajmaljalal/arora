import React from 'react'
import { Avatar, Badge, Box, Center, CloseButton, HStack, Text, VStack } from '@chakra-ui/react'
import { Thread } from './utils/objects'

const threadList: Thread[] = [
  {
    contactName: 'Alex',
    contactTitle: 'Front End Engineer',
    recentMessagesCount: 3,
    threadId: 'threadidone'
  },
  {
    contactName: 'Jhon Dov',
    contactTitle: 'Back End Engineer',
    recentMessagesCount: 2,
    threadId: 'threadidtwo'
  },
  {
    contactName: 'Maria Lex',
    contactTitle: 'Full End Engineer',
    recentMessagesCount: 0,
    threadId: 'threadidthree'
  },
  {
    contactName: 'Bob stove',
    contactTitle: 'Everthing Engineer',
    recentMessagesCount: 0,
    threadId: 'threadidfour'
  },
  {
    contactName: 'Ajmal Jalal',
    contactTitle: 'Front End Engineer',
    recentMessagesCount: 0,
    threadId: 'threadidfive'
  },
  {
    contactName: 'Alex',
    contactTitle: 'Front End Engineer',
    recentMessagesCount: 0,
    threadId: 'threadidsix'
  }
]

type ThreadListProps = {
  currentThreadId: string
  onClickThread: (thread: Thread) => void
}

const ThreadList = ({ onClickThread, currentThreadId }: ThreadListProps) => {

  const renderThreadListHeader = () => {
    return (
      <Center
        bg='brand.primaryLight'
        height='50px'
        fontWeight='600'
        position='sticky'
        top='0'
        zIndex='1000'
        boxShadow='1px 1px 1px lightGray'
      >
        Recent conversations
      </Center>
    )
  }

  const renderMessageCountBadge = (count: number) => {
    return (
      count > 0 && <Badge ml='2'
        bg='brand.orange'
        color='brand.white'
        rounded='4px'
        width='22px'
        height='16px'
        display='inline-flex'
        alignItems='center'
        justifyContent='center'
      >
        {count}
      </Badge>
    )
  }

  const renderTheadList = () => {
    return (
      <VStack alignItems='start' spacing={0}>
        {
          threadList.map((thread: Thread) => {
            return (
              <HStack
                key={thread.threadId}
                bg={thread.threadId === currentThreadId && 'brand.grey100'}
                _hover={{ background: 'brand.grey100' }}
                width='100%'
                p='8px 12px'
                cursor='pointer'
                borderBottom='1px solid'
                borderColor='brand.grey100'
                justifyContent='space-between'
                onClick={() => onClickThread(thread)}
              >
                <HStack>
                  <Avatar name={thread.contactName} size='sm' />
                  <Box fontSize='14px'>
                    <Text fontWeight='600'>
                      {thread.contactName}
                      {renderMessageCountBadge(thread.recentMessagesCount)}
                    </Text>
                    <Text color='brand.grey400'>{thread.contactTitle}</Text>
                  </Box>
                </HStack>
                <CloseButton size='sm' color='brand.grey400' _focus={{ baxShadow: 'none' }} />
              </HStack>
            )
          })
        }
      </VStack>
    )
  }

  return (
    <Box
      bg='white'
      minWidth='300px'
      minHeight='calc(100vh - 135px)'
      maxHeight='calc(100vh - 135px)'
      border='1px solid'
      borderColor='brand.primaryLight'
      flex={1}
      borderRadius='4px'
      overflowY='auto'
      position='relative'
    >
      {renderThreadListHeader()}
      {renderTheadList()}
    </Box>
  )
}

export default ThreadList