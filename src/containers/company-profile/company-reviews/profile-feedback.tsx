import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import RatingView from '../../../components/rating/rating-view'

type ProfileFeedbackProps = {
  feedback: any
}

const ProfileFeedback = ({ feedback }: ProfileFeedbackProps) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='flex-start' width='100%'>
      <ProfileFeedbackItem
        title='Overall company rating'
        rating={feedback.overallCompanyRating}
        reviewsCount={feedback.reviewsCount}
        color='brand.orange'
      />
      <ProfileFeedbackItem
        title='Hiring process rating'
        rating={feedback.hiringProcessRating}
        reviewsCount={feedback.hiringProcessReviewsCount}
        color='brand.primary'
      />
      <ProfileFeedbackItem
        title='Average hiring duration'
        rating={feedback.averageHiringDuration}
        reviewsCount={feedback.hiringProcessReviewsCount}
        color='brand.secondary'
      />
    </Box>
  )
}

const ProfileFeedbackItem = ({ title, color, rating, reviewsCount = null }) => {
  const renderContent = () => {
    if (title !== 'Average hiring duration') {
      return (
        <HStack px='8px'>
          <Text color='brand.grey400'><span style={{ fontSize: '32px', color: 'black', fontWeight: 'bolder' }}>{rating}</span>/5</Text>
          <RatingView rating={rating} />
          <Text color='brand.grey400'>({reviewsCount} reviews)</Text>
        </HStack >
      )
    } else {
      return (
        <Text color='brand.grey400' px='8px'><span style={{ fontSize: '32px', color: 'black', fontWeight: 'bolder' }}>{rating}</span> days</Text>
      )
    }
  }
  return (
    <Box
      borderLeft='5px solid'
      borderColor={color}
      borderRadius='4px'
      p='8px'
      bg='brand.white'
      display='flex'
      width='full'
      mb='8px'
      alignItems='center'
    >
      {/* {icon} */}
      <Box ml='4px'>
        <Text fontSize='14' color='brand.grey400'>{title}</Text>
        {renderContent()}
      </Box>
    </Box>
  )
}

export default ProfileFeedback