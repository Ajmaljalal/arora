import React from 'react'
import { border, Box, Stack, Text } from '@chakra-ui/react'
import DraftIcon from '../../../public/assets/icons/dashboard/draft.svg'
import InReviewIcon from '../../../public/assets/icons/dashboard/in-review.svg'
import ReviewedIcon from '../../../public/assets/icons/dashboard/reviewed.svg'
import PublishedIcon from '../../../public/assets/icons/dashboard/published.svg'

type CardType = 'draft' | 'inReview' | 'reviewed' | 'published'
type JobsStatusCardProps = {
  type: CardType
  number: number
}

const cardItems = {
  draft: {
    background: 'brand.grey200',
    text: 'Total draft jobs',
    Icon: <DraftIcon />,
    border: '1px solid',
    borderColor: 'brand.grey300'
  },
  inReview: {
    background: 'brand.lightOrange',
    text: 'Total jobs in review',
    Icon: <InReviewIcon />,
    border: `1px solid`,
    borderColor: 'brand.orange'
  },
  reviewed: {
    background: 'brand.lightYellow',
    text: 'Total jobs reviewed',
    Icon: <ReviewedIcon />,
    border: '1px solid',
    borderColor: 'brand.yellow'
  },
  published: {
    background: 'brand.grey200',
    text: 'Total jobs published',
    Icon: <PublishedIcon />,
    border: '1px solid',
    borderColor: 'brand.primary'
  }
}

const JobStatusCardItem = ({ type, number }: JobsStatusCardProps) => {

  return (
    <Box
      minWidth='210px'
      height='78px'
      bg={cardItems[type].background}
      p='16px'
      display='flex'
      alignItems='center'
      border={cardItems[type].border}
      borderColor={cardItems[type].borderColor}
      borderRadius='4px'
      flex={1}
    >
      <Box mr='16px'>{cardItems[type].Icon}</Box>
      <Stack spacing={-1}>
        <Text fontSize='12px' fontWeight='500'>{cardItems[type].text}</Text>
        <Text fontSize='36px' fontWeight='700'>{number}</Text>
      </Stack>
    </Box>
  )
}

export default JobStatusCardItem