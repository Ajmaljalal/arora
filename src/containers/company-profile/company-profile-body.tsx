import React from 'react'
import { HStack, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import ProfileDetailTile from './profile-details/profile-details-tile'
import ProfileFeedback from './profile-details/profile-feedback'
import TabHeader from '../../components/tabs/tab-header'

type ProfileDetailsBodyProps = {
  company: any
}

const ProfileDetailsBody = ({ company }: ProfileDetailsBodyProps) => {
  if (!company) {
    return null
  }

  const renderDetailsTab = () => {
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
      <TabPanel p='0' pb='20px' style={{ height: 'calc(100vh - 220px' }} overflow='auto' position='relative'>
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
      </TabPanel>
    )
  }

  return (
    <Tabs>
      <TabList borderBottom='1px solid' borderColor='brand.grey200'>
        <TabHeader text='Overview' />
        <TabHeader text='Reviews' />
        <TabHeader text='Gallery' />
      </TabList>
      <TabPanels mt='16px'>
        {renderDetailsTab()}
      </TabPanels>
    </Tabs>
  )
}

export default ProfileDetailsBody