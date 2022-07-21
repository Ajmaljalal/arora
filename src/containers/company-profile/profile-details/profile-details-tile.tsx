import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import Benefits from './profile-benefits'
import Culture from './profile-culture'
import ProfileSummary from './profile-summary'
import JobOpenings from '../company-job-openings'

type ProfileDetailTileProps = {
  title: string
  content: any
  bg?: string
}

const ProfileDetailTile = ({ title, content, bg = 'brand.white' }: ProfileDetailTileProps) => {

  const renderContent = () => {
    switch (title.toLowerCase()) {
      case 'about':
        return <Text>{content}</Text>
      case 'benefits':
        return <Benefits benefits={content} />
      case 'culture':
        return <Culture culture={content} />
      case 'summary':
        return <ProfileSummary summary={content} />
      case 'job openings':
        return <JobOpenings companyId={content} />
      default:
        return null
    }
  }
  return (
    <Box w='100%' bg={bg} borderRadius='4px' p='16px'>
      <Heading as='h2' fontSize='16px' fontWeight='600' mb='16px'>
        {title}
      </Heading>
      {renderContent()}
    </Box>
  )
}

export default ProfileDetailTile