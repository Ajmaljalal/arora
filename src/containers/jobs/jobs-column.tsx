import React from 'react'
import { Box, HStack, VStack, Text } from '@chakra-ui/react'
import JobCard from './job-card'
import { jobs } from '../../data/index'

type JobsColumnProps = {
  column: { name: string, color: string }
}

const JobsColumn = ({ column }: JobsColumnProps) => {
  const currentColumnJobs = jobs.filter(job => job.status.toLowerCase() === column.name.toLowerCase())

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
            {currentColumnJobs.length}
          </Text>
        </HStack>
      </Box>
    )
  }

  const renderJobsList = () => {
    return (
      currentColumnJobs.map(job => {
        return <JobCard key={job.id} job={{ id: job.id, company: job.company, status: job.status, ...job.jobSummary }} />
      })
    )
  }


  return (
    <VStack flex={1} >
      {renderColumnHeader()}
      <VStack w='100%' maxHeight='65vh' overflowY='auto'>
        {renderJobsList()}
      </VStack>
    </VStack>
  )
}

export default JobsColumn