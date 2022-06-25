import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import PageTitle from '../../components/headings/page-title'
import { BaseButton } from '../../components/buttons/button'
import Link from 'next/link'

type JobsHeaderProps = {}

const JobsHeader = ({ }: JobsHeaderProps) => {


  const renderTitle = () => {
    return (
      <Box>
        <PageTitle text='Jobs' />
        <Text
          mt='8px'
          fontSize='14px'
          fontWeight='400'
          color='brand.grey400'
        >
          30 total vacancies
        </Text>
      </Box>
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
    <Box
      borderBottom='2px solid'
      borderColor='brand.grey200'
      pb='10px'
      display='flex'
      justifyContent='space-between'
    >
      {renderTitle()}
      {renderActionButtons()}
    </Box>
  )
}

export default JobsHeader