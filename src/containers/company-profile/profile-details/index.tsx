import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import ProfileDetailTile from './profile-details-tile'
import ProfileFeedback from './profile-feedback'

type CompanyProfileDetailsProps = {
  company: any
}
const CompanyProfileDetails = ({ company }: CompanyProfileDetailsProps) => {
  const summary = {
    numberOfEmployees: company.numberOfEmployees,
    jobOpenings: company.jobOpenings,
  }
  const feedbacks = {
    averageHiringDuration: company.averageHiringDuration,
    overallCompanyRating: company.overallCompanyRating,
    reviewsCount: company.reviewsCount,
    hiringProcessRating: company.hiringProcessRating,
    hiringProcessReviewsCount: company.hiringProcessReviewsCount,
  }
  return (
    <HStack spacing='16px' align='flex-start'>
      <VStack flex={2}>
        <ProfileDetailTile title='About' content={company.about} />
        <ProfileDetailTile title='Culture' content={company.culture} />
        <ProfileDetailTile title='Benefits' content={company.benefits} />
        <ProfileDetailTile title='Job Openings' content={company.id} />
      </VStack>
      <VStack flex={1} position='sticky' top='0'>
        <ProfileDetailTile title='Summary' content={summary} />
        <ProfileFeedback feedback={feedbacks} />
      </VStack>
    </HStack>
  )
}

export default CompanyProfileDetails