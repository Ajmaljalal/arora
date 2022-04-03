import React from 'react'
import { HStack } from '@chakra-ui/react'
import JobStatusCardItem from './job-status-card-item'


const JobStatusCardsList = () => {
  return (
    <HStack justify='space-between'>
      <JobStatusCardItem number={23} type='draft' />
      <JobStatusCardItem number={45} type='inReview' />
      <JobStatusCardItem number={10} type='reviewed' />
      <JobStatusCardItem number={40} type='published' />
    </HStack>
  )
}

export default JobStatusCardsList