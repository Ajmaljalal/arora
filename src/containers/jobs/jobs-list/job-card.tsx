import React from 'react'
import { Box, Text, Wrap } from '@chakra-ui/react'
import { JobCardObject } from './objects'
import Link from 'next/link'

type JobCardProps = {
  job: JobCardObject
}

const JobCard = ({ job }: JobCardProps) => {
  const isRemote = job.JobMethod.toLowerCase() === 'remote'

  const renderJobTitle = () => {
    return (
      <Box
        minWidth='150px'
        mb='10px'
      >
        <Text
          fontWeight='600'
          fontSize='15px'
        >
          {job.JobTitle}
        </Text>
        <Text
          fontSize='14px'
          color='brand.black'
        >
          {job.company}
        </Text>
      </Box>
    )
  }

  const renderJobDetailItem = (detail: string) => {
    return (
      <Box display='flex' alignItems='center' px='4px'>
        <Box w='4px' h='4px' bg='brand.grey400' borderRadius='50%' mr='4px' />
        <Text
          fontSize='12px'
          color='brand.black'
        >
          {detail}
        </Text>
      </Box>
    )
  }

  const renderJobDetails = () => {
    return (
      <Wrap
        bg='brand.grey100'
        border='1px solid'
        borderColor='brand.grey200'
        justify='start'
        borderRadius='4px'
        py='10px'
      >
        {renderJobDetailItem(job.JobType)}
        {renderJobDetailItem(job.JobMethod)}
        {!isRemote && renderJobDetailItem(job.JobLocation)}
      </Wrap>
    )
  }

  const renderJobApplicants = () => {
    return (
      job.status.toLowerCase() === 'published' &&
      <Box
        bg='brand.grey100'
        display='flex'
        justifyContent='center'
        alignItems='center'
        borderRadius='4px'
        mt='8px'
        h='56px'
      >
        <Text color='brand.primary'>24 Applicants</Text>
      </Box>
    )
  }

  return (
    <Link href={`/jobs/${job.id}`}>
      <Box
        borderRadius='4px'
        border='1px solid'
        borderColor='brand.grey200'
        bg='brand.white'
        minWidth='150px'
        w='100%'
        maxHeight='255px'
        p='16px'
        cursor='pointer'
      >
        {renderJobTitle()}
        {renderJobDetails()}
        {renderJobApplicants()}
      </Box>
    </Link>
  )
}

export default JobCard