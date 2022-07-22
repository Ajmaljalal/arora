import React, { ChangeEvent, useState } from 'react'
import { Avatar, Box, HStack, Text, VStack } from '@chakra-ui/react'
import { ReviewObj } from '../utils/objects'
import RatingView from '../../../components/rating/rating-view'
import LikeIcon from '../../../../public/assets/icons/like.svg'
import ChatIcon from '../../../../public/assets/icons/comment.svg'
import CustomTextArea from '../../../components/form/text-area'
import RepliesList from './replies-list'

type ReviewProps = {
  review: ReviewObj
  currentReviewId: string
  onClickComment: (id: string) => void
}

const Review = ({ review, currentReviewId, onClickComment }: ReviewProps) => {
  const [inputText, setInputText] = useState('')
  const handleInputTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value)
  }

  const handleSubmit = () => {
    const date = new Date()
    const newReply = {
      id: 'messagesixid',
      text: inputText,
      sender: {
        name: 'Me',
        id: 'senderMeid'
      },
      date: date.toLocaleDateString()
    }
    setInputText('')
  }

  const renderReviewHeader = (review: ReviewObj) => {
    return (
      <HStack>
        <Avatar name={review.sender.name} width='45px' height='45px' />
        <VStack alignItems='flex-start' spacing={0}>
          <HStack>
            <Text fontWeight='600'>{review.sender.name}</Text>
            <Box as='time' color='brand.grey400' fontSize='14px'>{review.date}</Box>
          </HStack>
          <RatingView rating={review.rating} />
        </VStack>
      </HStack>
    )
  }
  return (
    <VStack
      alignItems='flex-start'
      border='1px solid'
      borderColor='brand.grey200'
      p='16px'
      borderRadius='4px'
      mb='16px'
      _last={{ margin: '0' }}
    >
      {renderReviewHeader(review)}
      <Text width='fit-content'>
        {review.text}
      </Text>
      <HStack spacing={4} color='brand.grey400'>
        <HStack spacing={1}><LikeIcon onClick={() => console.log('like clicked')} cursor='pointer' /><Text fontSize='14px'>{review.likes}</Text></HStack>
        <HStack spacing={1}><ChatIcon onClick={() => onClickComment(review.id)} cursor='pointer' /><Text fontSize='14px'>{review.comments}</Text></HStack>
      </HStack>
      {currentReviewId === review.id && <RepliesList />}
      {currentReviewId === review.id && <CustomTextArea
        value={inputText}
        placeholderText='comment'
        handleChange={handleInputTextChange}
        handleSubmit={handleSubmit}
      />}
    </VStack>
  )
}

export default Review