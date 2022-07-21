import React from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import DurationIcon from '../../../../public/assets/icons/duration-clock.svg'
import RatingOrangIcon from '../../../../public/assets/icons/rating-orange.svg'
import RatingBlueIcon from '../../../../public/assets/icons/rating-blue.svg'
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
        icon={<RatingOrangIcon />}
        reviewsCount={feedback.reviewsCount}
        color='brand.orange'
      />
      <ProfileFeedbackItem
        title='Hiring process rating'
        rating={feedback.hiringProcessRating}
        icon={<RatingBlueIcon />}
        reviewsCount={feedback.hiringProcessReviewsCount}
        color='brand.primary'
      />
      <ProfileFeedbackItem
        title='Average hiring duration'
        rating={feedback.averageHiringDuration}
        icon={<DurationIcon />}
        reviewsCount={feedback.hiringProcessReviewsCount}
        color='brand.secondary'
      />
    </Box>
  )
}

const ProfileFeedbackItem = ({ title, color, icon, rating, reviewsCount = null }) => {
  const renderContent = () => {
    if (title !== 'Average hiring duration') {
      return (
        <HStack>
          <RatingView rating={rating} />
          <Text fontWeight='600'>{rating}/5</Text>
          <Text fontWeight='600' color='brand.grey400'>({reviewsCount} reviews)</Text>
        </HStack>
      )
    } else {
      return (
        <Text fontWeight='600'>{rating} days</Text>
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
      {icon}
      <Box ml='4px'>
        <Text fontSize='14' color='brand.grey400'>{title}</Text>
        {renderContent()}
      </Box>
    </Box>
  )
}

export default ProfileFeedback