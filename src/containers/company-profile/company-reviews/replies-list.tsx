import { VStack } from '@chakra-ui/react'
import React from 'react'
import Reply from './reply'

const replies = [
  {
    id: 'messageoneId',
    text: 'This company is the best company I ever worked with. The people are so good and the environment is very smooth. They have very good benefits and everything they provide is super good and easy to work',
    sender: {
      name: 'Alex Ropechero',
      id: 'senderAlexId'
    },
    date: '2/12/2022',

  },
  {
    id: 'messagetwoId',
    text: 'Hello, yes I did and I liked it. Will let you know asap on the decision. This company is the best company I ever worked with. The people are so good and the environment is very smooth.',
    sender: {
      name: 'John Dov',
      id: 'senderMeid'
    },
    date: '2/12/2022',
  },
  {
    id: 'messagethreeId',
    text: 'This company is the best company I ever worked with. The people are so good and the environment is very smooth.',
    sender: {
      name: 'me',
      id: 'senderAlexId'
    },
    date: '2/12/2022',
  }
]

type RepliesListProps = {}

const RepliesList = (props: RepliesListProps) => {
  return (
    <VStack>
      {
        replies?.map(reply => {
          return <Reply reply={reply} />
        })
      }
    </VStack>
  )
}

export default RepliesList