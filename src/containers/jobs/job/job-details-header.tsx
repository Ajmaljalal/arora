import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
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
        {/* <Box> */}
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
        {/* {renderJobDetails()} */}
        {/* </Box> */}
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

  // const renderJobDetails = () => {
  //   return (
  //     <Wrap
  //       justify='start'
  //       borderRadius='4px'
  //       mt='8px'
  //     >
  //       {renderJobDetailItem(job.jobSummary.JobType)}
  //       {renderJobDetailItem(job.jobSummary.JobMethod)}
  //       {!isRemote && renderJobDetailItem(job.jobSummary.JobLocation)}
  //     </Wrap>
  //   )
  // }

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