import React from 'react'
import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import PageTitle from '../../../components/headings/page-title'
import { BaseButton } from '../../../components/buttons/button'
import ChevronLeftIcon from '../../../../public/assets/icons/chevron-left.svg'
import { useRouter } from 'next/router'
import CustomTag from '../../../components/tag'

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
      <Box display='flex' alignItems='center'>
        <Box
          w='32px'
          h='32px'
          borderRadius='50%'
          bg='brand.white'
          mr='16px'
          ml='-8px'
          display='flex'
          justifyContent='center'
          alignItems='center'
          border='1px solid'
          borderColor='brand.grey200'
          cursor='pointer'
          onClick={handleClickBack}
        >
          <ChevronLeftIcon />
        </Box>
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
      <Link href='/company-profile'>
        <a>
          <Text color='brand.grey500'>Goolge LLC</Text>
        </a>
      </Link>
    )
  }

  const renderActionButtons = () => {
    const pauseBtnText = job?.isPaused ? 'Start hiring' : 'Pause hiring'
    const closeBtnText = job?.isClosed ? 'Start job' : 'Close job'
    return (
      <HStack spacing={2}>
        <BaseButton text={closeBtnText} color='brand.red' outlined borderColor='brand.grey300' />
        {!job.isClosed && <BaseButton text={pauseBtnText} color='brand.primary' outlined borderColor='brand.grey300' />}
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