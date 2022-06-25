import React from 'react'
import { Box, Text, Wrap } from '@chakra-ui/react'
import Link from 'next/link'
import PageTitle from '../../components/headings/page-title'
import { BaseButton } from '../../components/buttons/button'
import ChevronLeftIcon from '../../../public/assets/icons/chevron-left.svg'
import { useRouter } from 'next/router'

type JobDetailsHeaderProps = {
  job: any
}

const JobDetailsHeader = ({ job }: JobDetailsHeaderProps) => {
  const isRemote = job.jobSummary.JobMethod.toLowerCase() === 'remote'
  const router = useRouter()

  const handleClickBack = () => {
    router.back()
  }


  const renderTitle = () => {
    return (
      <Box display='flex'>
        <Box
          w='32px'
          h='32px'
          borderRadius='50%'
          bg='brand.secondaryLight'
          mr='10px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          border='1px solid'
          borderColor='brand.secondary'
          cursor='pointer'
          onClick={handleClickBack}
        >
          <ChevronLeftIcon />
        </Box>
        <Box>
          <PageTitle text={job.jobSummary.JobTitle} />
          {renderJobDetails()}
        </Box>
      </Box>
    )
  }

  const renderJobDetailItem = (detail: string) => {
    return (
      <Box display='flex' alignItems='center' pr='4px'>
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
        // bg='brand.white'
        justify='start'
        borderRadius='4px'
        // p='8px'
        mt='8px'
      >
        {renderJobDetailItem(job.jobSummary.JobType)}
        {renderJobDetailItem(job.jobSummary.JobMethod)}
        {!isRemote && renderJobDetailItem(job.jobSummary.JobLocation)}
      </Wrap>
    )
  }

  const renderActionButtons = () => {
    return (
      <Box>
        <Link href='/create-job-post' passHref>
          <a>
            <BaseButton text='Post a job' color='brand.white' bg='brand.primary' />
          </a>
        </Link>
      </Box>
    )
  }
  return (
    job ? <Box
      borderBottom='2px solid'
      borderColor='brand.grey200'
      pb='10px'
      display='flex'
      justifyContent='space-between'
    >
      {renderTitle()}
      {renderActionButtons()}
    </Box> : null
  )
}

export default JobDetailsHeader