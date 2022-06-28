import React from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import JobTypeIcon from '../../../../public/assets/icons/job-details/job-type.svg'
import JobMethodIcon from '../../../../public/assets/icons/job-details/job-method.svg'
import LocationIcon from '../../../../public/assets/icons/job-details/job-location.svg'
import WorkExperienceIcon from '../../../../public/assets/icons/job-details/work-experience.svg'
import DeadlineIcon from '../../../../public/assets/icons/job-details/deadline.svg'

type JobSummaryProps = {
  summary: any
}

const JobSummary = ({ summary }: JobSummaryProps) => {

  const renderIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'type':
        return <JobTypeIcon />
      case 'method':
        return <JobMethodIcon />
      case 'location':
        return <LocationIcon />
      case 'minimum experience':
        return <WorkExperienceIcon />
      case 'deadline':
        return <DeadlineIcon />
    }
  }

  const renderSummarItem = (title: string, text: string) => {
    return (
      <HStack spacing='16px' mb='16px'>
        {renderIcon(title)}
        <Box>
          <Text fontSize='14px' color='brand.grey400'>{title}</Text>
          <Text>{text} {title === 'Minimum Experience' && 'Years'}</Text>
        </Box>
      </HStack>
    )
  }
  return (
    <Box>
      <Box borderBottom='1px solid' borderColor='brand.grey200' pb='16px'>
        <Text fontSize='14px' color='brand.grey400'>Salary Range</Text>
        <Text fontSize='24px' fontWeight='700' color='brand.secondary'>{summary.MinSalary.toString()} - {summary.MaxSalary.toString()}</Text>
      </Box>
      <Box mt='16px'>
        {renderSummarItem('Type', summary.JobType)}
        {renderSummarItem('Method', summary.JobMethod)}
        {renderSummarItem('location', summary.JobLocation)}
        {renderSummarItem('Minimum Experience', summary.MinYearsofExperience)}
        {renderSummarItem('Deadline', summary.ApplicationDeadline)}
      </Box>
    </Box>
  )
}

export default JobSummary