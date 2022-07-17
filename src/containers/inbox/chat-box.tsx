import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Box, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { Thread } from './utils/objects'
import { MessageObj } from './utils/objects'
import Message from './message'
import CustomTextArea from '../../components/form/text-area'


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
      messageText: 'Hey I just looked into this guy profile and I thing he is a good fit. What do you think?',
      sender: {
        name: 'Ajmal Jalal',
        id: 'senderAjmalId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'I don\'nt know yet. let me check with Max and see what he thinks about it.',
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
    },
    {
      id: 'messageoneId',
      messageText: 'Hey I just looked into this guy profile and I thing he is a good fit. What do you think?',
      sender: {
        name: 'Ajmal Jalal',
        id: 'senderAjmalId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'I don\'nt know yet. let me check with Max and see what he thinks about it.',
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
    },
    {
      id: 'messageoneId',
      messageText: 'Hey I just looked into this guy profile and I thing he is a good fit. What do you think?',
      sender: {
        name: 'Ajmal Jalal',
        id: 'senderAjmalId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'I don\'nt know yet. let me check with Max and see what he thinks about it.',
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
    },
    {
      id: 'messageoneId',
      messageText: 'Hey I just looked into this guy profile and I thing he is a good fit. What do you think?',
      sender: {
        name: 'Ajmal Jalal',
        id: 'senderAjmalId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'I don\'nt know yet. let me check with Max and see what he thinks about it.',
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
    },
    {
      id: 'messageoneId',
      messageText: 'Hey I just looked into this guy profile and I thing he is a good fit. What do you think?',
      sender: {
        name: 'Ajmal Jalal',
        id: 'senderAjmalId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'I do\'nt know yet. let me check with Max and see what he thinks about it. I do\'nt know yet. let me check with Max and see what he thinks about it. I do\'nt know yet. let me check with Max and see what he thinks about it. I do\'nt know yet. let me check with Max and see what he thinks about it.',
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
    },
    {
      id: 'messageoneId',
      messageText: 'Hey I just looked into this guy profile and I thing he is a good fit. What do you think?',
      sender: {
        name: 'Ajmal Jalal',
        id: 'senderAjmalId'
      },
      date: '2/12/2022'
    },
    {
      id: 'messagetwoId',
      messageText: 'I don\'nt know yet. let me check with Max and see what he thinks about it.',
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
    },

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
  const ref = useRef(null);
  const [currentMessagesList, setCurrentMessagesList] = useState<MessageObj[]>(messages[currentThread.threadId])
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    if (currentThread) {
      setCurrentMessagesList(messages[currentThread.threadId])
      scrollToBottom()
    }
  }, [currentThread, currentMessagesList])

  const scrollToBottom = () => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  }

  const handleInputTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value)
  }

  const handleSubmit = () => {
    const date = new Date()
    const newMessage: MessageObj = {
      id: 'messagesixid',
      messageText: inputText,
      sender: {
        name: 'Me',
        id: 'senderMeid'
      },
      date: date.toLocaleDateString()
    }
    const newMessages = currentMessagesList
    newMessages.push(newMessage)
    setCurrentMessagesList(newMessages)
    setInputText('')
    scrollToBottom()
  }


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
      <Box alignItems='flex-start' p='16px' minHeight='calc(100vh - 280px)' maxHeight='calc(100vh - 300px)' overflowY='auto' >
        {
          currentMessagesList?.map((message: MessageObj) => {
            return (
              <Message key={message.id} message={message} />
            )
          })
        }
        <Box ref={ref} height='100px' />
      </Box>
    )
  }

  const renderTextInput = () => {
    return (
      <Box position='sticky' bg='brand.white' px='16px' width='100%' bottom='0'>
        <CustomTextArea
          value={inputText}
          placeholderText='message here...'
          handleChange={handleInputTextChange}
          handleSubmit={handleSubmit}
        />
      </Box>
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
      bg='brand.white'
    >
      {currentThread.threadId && renderThreadListHeader()}
      {currentThread?.threadId && renderMessages()}
      {currentThread?.threadId && renderTextInput()}
    </Box>
  )
}

export default ChatBox