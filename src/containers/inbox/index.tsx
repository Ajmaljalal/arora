import React, { useState } from 'react'
import { HStack } from '@chakra-ui/react'
import ThreadList from './thread-list'
import ChatBox from './chat-box'
import { Thread } from './utils/objects'

type ChatProps = {}

const Chat = (props: ChatProps) => {
  const [currentThread, setCurrentThreadId] = useState<Thread>({ threadId: '', contactName: '', contactTitle: '', recentMessagesCount: 0 })

  const handleCurrentThreadIdChange = (thread: Thread) => {
    setCurrentThreadId(thread)
  }
  return (
    <HStack
      width='100%'
      minHeight='calc(100% - 20px)'
      alignItems='flex-start'
    >
      <ThreadList onClickThread={handleCurrentThreadIdChange} currentThreadId={currentThread.threadId} />
      <ChatBox currentThread={currentThread} />
    </HStack>
  )
}

export default Chat