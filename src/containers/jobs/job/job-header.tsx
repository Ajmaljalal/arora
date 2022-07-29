import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import PageTitle from '../../../components/headings/page-title'
import { BaseButton } from '../../../components/buttons/button'
import { useRouter } from 'next/router'
import CustomTag from '../../../components/tag'
import CircledBackButton from '../../../components/buttons/circled-back-button'

type JobDetailsHeaderProps = {
  job: any
}

const JobDetailsHeader = ({ job }: JobDetailsHeaderProps) => {
  if (!job) {
    return null
  }

  const isRemote = job.jobSummary.JobMethod.toLowerCase() === 'remote'
  const router = useRouter()

  const handleClickBack = () => {
    router.back()
  }


  const renderTitle = () => {
    const jobStatusText = job.isClosed ? 'Closed' : 'Hiring paused'
    const showStatusText = job.isClosed || job.isPaused
    return (
      <Box display='flex' alignItems='flex-start'>
        <CircledBackButton onClick={handleClickBack} />
        <Box>
          <HStack>
            <PageTitle text={job.jobSummary.JobTitle} />
            {showStatusText &&
              <CustomTag
                text={jobStatusText}
                color='brand.red'
                bg='brand.lightOrange'
              />
            }
          </HStack>
          {renderCompanyName()}
        </Box>
      </Box>
    )
  }

  const renderCompanyName = () => {
    return (
      <Link href='/profiles/company/whateveridofthecompany'>
        <a target='_blank'>
          <Text color='brand.grey400' width='fit-content' _hover={{ color: 'brand.primary', fontWeight: '600' }}>{job.company}</Text>
        </a>
      </Link>
    )
  }

  const renderActionButtons = () => {
    const pauseBtnText = job?.isPaused ? 'Start hiring' : 'Pause hiring'
    const closeBtnText = job?.isClosed ? 'Start job' : 'Close job'
    return (
      <HStack spacing={2}>
        <BaseButton text={closeBtnText} color='brand.red' borderColor='brand.grey300' />
        {!job.isClosed && <BaseButton text={pauseBtnText} color='brand.primary' borderColor='brand.grey300' />}
        <Link href={`/jobs/edit/${job.id}`} passHref>
          <a>
            <BaseButton text='Edit job' color='brand.white' bg='brand.primary' />
          </a>
        </Link>
      </HStack>
    )
  }
  return (
    <Box
      borderColor='brand.grey200'
      mb='24px'
      display='flex'
      justifyContent='space-between'
    >
      {renderTitle()}
      {renderActionButtons()}
    </Box>
  )
}

export default JobDetailsHeader