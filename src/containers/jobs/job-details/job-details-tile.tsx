import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import JobSkills from './job-skills'
import JobRequirements from './job-requirements'
import JobResponsibilities from './job-responsibilities'
import JobImpacts from './job-impacts'
import JobSummary from './job-summary'

type JobDetailsTileProps = {
  title: string
  content: any
}

const JobDetailTiles = ({ title, content }: JobDetailsTileProps) => {

  const renderContent = () => {
    switch (title.toLowerCase()) {
      case 'skills':
        return <JobSkills skills={content} />
      case 'requirements':
        return <JobRequirements requirements={content} />
      case 'responsibilities':
        return <JobResponsibilities responsibilities={content} />
      case 'description':
        return <Text>{content}</Text>
      case 'impacts':
        return <JobImpacts impacts={content} />
      case 'summary':
        return <JobSummary summary={content} />
    }
  }
  return (
    <Box w='100%' bg='brand.white' borderRadius='4px' p='16px'>
      <Heading as='h2' fontSize='18px' fontWeight='600' mb='16px'>
        {title}
      </Heading>
      {renderContent()}
    </Box>
  )
}

export default JobDetailTiles