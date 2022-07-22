import { HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { BaseButton } from '../../../components/buttons/button'
import TileWithTitle from '../../../components/tiles/tile-with-title'
import ProfileFeedback from './profile-feedback'
import Review from './review'

const reviews = [
  {
    id: 'messageoneId',
    text: 'This company is the best company I ever worked with. The people are so good and the environment is very smooth. They have very good benefits and everything they provide is super good and easy to work',
    sender: {
      name: 'Alex Ropechero',
      id: 'senderAlexId'
    },
    date: '2/12/2022',
    rating: 5,
    likes: 20,
    comments: 32

  },
  {
    id: 'messagetwoId',
    text: 'Hello, yes I did and I liked it. Will let you know asap on the decision. This company is the best company I ever worked with. The people are so good and the environment is very smooth.',
    sender: {
      name: 'John Dov',
      id: 'senderMeid'
    },
    date: '2/12/2022',
    rating: 4,
    likes: 10,
    comments: 23
  },
  {
    id: 'messagethreeId',
    text: 'This company is the best company I ever worked with. The people are so good and the environment is very smooth.',
    sender: {
      name: 'me',
      id: 'senderAlexId'
    },
    date: '2/12/2022',
    rating: 5,
    likes: 25,
    comments: 42
  }
]

type CompanyProfileReviewsProps = {
  company: any
}
const CompanyProfileReviews = ({ company }: CompanyProfileReviewsProps) => {
  const [currentReviewId, setCurrentReviewId] = useState(null)
  const feedbacks = {
    averageHiringDuration: company.averageHiringDuration,
    overallCompanyRating: company.overallCompanyRating,
    reviewsCount: company.reviewsCount,
    hiringProcessRating: company.hiringProcessRating,
    hiringProcessReviewsCount: company.hiringProcessReviewsCount,
  }

  const handleCurrentReviewChange = (reviewId: string) => {
    if (currentReviewId === reviewId) {
      setCurrentReviewId(null)
    } else {
      setCurrentReviewId(reviewId)
    }
  }
  return (
    <HStack spacing='16px' align='flex-start'>
      <VStack flex={2}>
        <TileWithTitle title=''>
          {
            reviews?.map(review => {
              return <Review key={review.id} review={review} currentReviewId={currentReviewId} onClickComment={handleCurrentReviewChange} />
            })
          }

        </TileWithTitle>
      </VStack>
      <VStack flex={1} position='sticky' top='0'>
        <ProfileFeedback feedback={feedbacks} />
        <BaseButton
          text='Leav a review'
          bg='brand.primary'
          onClick={() => console.log('clicked')}
          color='brand.white' isFullWidth={true} />
      </VStack>
    </HStack>
  )
}

export default CompanyProfileReviews