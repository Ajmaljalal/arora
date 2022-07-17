import React, { useEffect, useState } from 'react'
import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { Thread } from './utils/objects'
import { MessageObj } from './utils/objects'
import Message from './message'


type ChatBoxProps = {
  currentThread: Thread
}


const messages = {
  'threadidone': [
    {
      id: 'messageoneId',
      messageText: 'Hello, did you look at my application',
      sender: {
        name: 'Alex',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'Hello, yes I did and I liked it. Will let you know asap on the decision',
      sender: {
        name: 'me',
        id: 'senderMeid'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagethreeId',
      messageText: 'Ok thanks',
      sender: {
        name: 'me',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    }
  ],
  'threadidtwo': [
    {
      id: 'messageoneId',
      messageText: 'Hello, did you look at my application',
      sender: {
        name: 'Alex',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'Hello, yes I did and I liked it. Will let you know asap on the decision',
      sender: {
        name: 'me',
        id: 'senderMeid'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagethreeId',
      messageText: 'Ok thanks',
      sender: {
        name: 'me',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    }
  ],
  'threadidthree': [
    {
      id: 'messageoneId',
      messageText: 'Hello, did you look at my application',
      sender: {
        name: 'Alex',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'Hello, yes I did and I liked it. Will let you know asap on the decision',
      sender: {
        name: 'me',
        id: 'senderMeid'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagethreeId',
      messageText: 'Ok thanks',
      sender: {
        name: 'me',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    }
  ],
  'threadidfour': [
    {
      id: 'messageoneId',
      messageText: 'Hello, did you look at my application',
      sender: {
        name: 'Alex',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'Hello, yes I did and I liked it. Will let you know asap on the decision',
      sender: {
        name: 'me',
        id: 'senderMeid'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagethreeId',
      messageText: 'Ok thanks',
      sender: {
        name: 'me',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    }
  ],
  'threadidfive': [
    {
      id: 'messageoneId',
      messageText: 'Hello, did you look at my application',
      sender: {
        name: 'Alex',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'Hello, yes I did and I liked it. Will let you know asap on the decision',
      sender: {
        name: 'me',
        id: 'senderMeid'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagethreeId',
      messageText: 'Ok thanks',
      sender: {
        name: 'me',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    }
  ],
  'threadidsix': [
    {
      id: 'messageoneId',
      messageText: 'Hello, did you look at my application',
      sender: {
        name: 'Alex',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'Hello, yes I did and I liked it. Will let you know asap on the decision',
      sender: {
        name: 'me',
        id: 'senderMeid'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagethreeId',
      messageText: 'Ok thanks',
      sender: {
        name: 'me',
        id: 'senderAlexId'
      },
      date: '2/12/2022'
    }
  ],
}

const ChatBox = ({ currentThread }: ChatBoxProps) => {
  const [currentMessagesList, setCurrentMessagesList] = useState<MessageObj[]>(messages[currentThread.threadId])

  useEffect(() => {
    if (currentThread) {
      setCurrentMessagesList(messages[currentThread.threadId])
    }
  }, [currentThread])

  const renderThreadListHeader = () => {
    return (
      <HStack
        bg='brand.primaryLight'
        height='50px'
        fontWeight='600'
        position='sticky'
        top='0'
        zIndex='1000'
        boxShadow='1px 1px 1px lightGray'
        px='32px'
        spacing={4}
      >
        <Text>{currentThread.contactName}</Text>
        <Divider orientation='vertical' borderColor='brand.grey50' />
        <Text color='brand.grey400'>{currentThread.contactTitle}</Text>
      </HStack>
    )
  }

  const renderMessages = () => {
    return (
      <VStack alignItems='flex-start' p='16px' spacing={4}>
        {
          currentMessagesList?.map((message: MessageObj) => {
            return (
              <Message key={message.id} message={message} />
            )
          })
        }
      </VStack>
    )
  }

  return (
    <Box
      flex={4}
      borderRadius='4px'
      border='1px solid'
      borderColor='brand.grey200'
      minHeight='calc(100vh - 135px)'
      maxHeight='calc(100vh - 135px)'
      overflowY='auto'
      color='brand.black'
      position='relative'
    >
      {currentThread.threadId && renderThreadListHeader()}
      {currentThread?.threadId && renderMessages()}
    </Box>
  )
}

export default ChatBox