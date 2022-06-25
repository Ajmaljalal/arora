import React from 'react'
import { Box, Text, Wrap } from '@chakra-ui/react'
import { JobCardObject } from './objects'
import Link from 'next/link'

type JobCardProps = {
  job: JobCardObject
}

const JobCard = ({ job }: JobCardProps) => {
  const isRemote = job.jobMethod.toLowerCase() === 'remote'

  const renderJobTitle = () => {
    return (
      <Text
        fontWeight='600'
        fontSize='15px'
        minWidth='150px'
        mb='10px'
      >
        {job.jobTitle}
      </Text>
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
        justify='center'
        borderRadius='4px'
        py='10px'
      >
        {renderJobDetailItem(job.jobType)}
        {renderJobDetailItem(job.jobMethod)}
        {!isRemote && renderJobDetailItem(job.location)}
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
    <Link href={`/jobs/${job.location}`}>
      <Box
        borderRadius='4px'
        bg='brand.white'
        minWidth='150px'
        w='100%'
        minHeight='100px'
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