import React from 'react'
import { Box, HStack, VStack, Text } from '@chakra-ui/react'
import JobCard from './job-card'

type JobsColumnProps = {
  column: { name: string, color: string }
}

const jobsList = [
  {
    jobTitle: 'React Engineer',
    jobType: 'Full time',
    jobMethod: 'Remote',
    location: 'Sacramento',
    createdBy: 'Ajmal Jalal',
    status: 'draft'
  },
  {
    jobTitle: 'Full Stack Engineer',
    jobType: 'Full time',
    jobMethod: 'from office',
    location: 'Sacramento',
    createdBy: 'Ajmal Jalal',
    status: 'draft'
  },
  {
    jobTitle: 'UI/UX Engineer',
    jobType: 'Full time',
    jobMethod: 'hibred',
    location: 'Sacramento',
    createdBy: 'Ajmal Jalal',
    status: 'in review'
  },
  {
    jobTitle: 'Javascript Developer',
    jobType: 'Full time',
    jobMethod: 'Remote',
    location: 'Sacramento',
    createdBy: 'Ajmal Jalal',
    status: 'reviewed'
  },
  {
    jobTitle: 'Senior Javascript Engineer',
    jobType: 'Full time',
    jobMethod: 'Remote',
    location: 'Sacramento',
    createdBy: 'Ajmal Jalal',
    status: 'published'
  }
]

const JobsColumn = ({ column }: JobsColumnProps) => {
  const currentColumnJobs = jobsList.filter(job => job.status.toLowerCase() === column.name.toLowerCase())

  const renderColumnHeader = () => {
    return (
      <Box borderRadius='4px' bg='brand.white' minWidth='150px' width='100%' boxShadow='0px 3px 2px rgba(0, 0, 0, 0.02);' mb='12px'>
        <Box height='7px' bg={column.color} borderTopEndRadius='4px' borderTopStartRadius='4px'></Box>
        <HStack p='14px' justify='space-between'>
          <Text fontWeight='600'>{column.name}</Text>
          <Text
            fontSize='14px'
            color='brand.grey400'
            w='27px' h='27px'
            bg='brand.grey100'
            borderRadius='4px'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            24
          </Text>
        </HStack>
      </Box>
    )
  }

  const renderJobsList = () => {
    return (
      currentColumnJobs.map(job => {
        return <JobCard job={job} />
      })
    )

  }


  return (
    <VStack flex={1}>
      {renderColumnHeader()}
      {renderJobsList()}
    </VStack>
  )
}

export default JobsColumn