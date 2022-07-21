import React from 'react'
import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import JobOpeningIcon from '../../../../public/assets/icons/job-details/job-type.svg'
import EmployeesIcon from '../../../../public/assets/icons/employees.svg'

type ProfileSummaryProps = {
  summary: any
}

const ProfileSummary = ({ summary }: ProfileSummaryProps) => {
  return (
    <VStack alignItems='flex-start' spacing={4}>
      <ProfileSummaryItem
        title='Number of open jobs'
        hintText='Job Openings'
        content={summary.jobOpenings}
        icon={<JobOpeningIcon />}
      />
      <ProfileSummaryItem
        title='Number of employees'
        hintText='Employees'
        content={summary.numberOfEmployees}
        icon={<EmployeesIcon />}
      />
    </VStack>
  )
}

const ProfileSummaryItem = ({ title, hintText, content, icon }) => {
  return (
    <HStack spacing={4}>
      {icon}
      <Box>
        <Text fontSize='14' color='brand.grey400'>{title}</Text>
        <Text>{content} {hintText}</Text>
      </Box>
    </HStack>
  )
}

export default ProfileSummary