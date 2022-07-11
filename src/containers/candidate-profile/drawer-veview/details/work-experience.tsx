import React from 'react'
import { Box, VStack, Text, HStack } from '@chakra-ui/react'
import BorderedTitledBox from '../../../../components/layouts/bordered-titled-box'
import CustomTag from '../../../../components/tag'

type WorkExperience = {
  workExperience: any
}

const WorkExperience = ({ workExperience }: WorkExperience) => {

  const renderWorkExperience = () => {
    const workExperienceLength = workExperience?.length
    const lastIndex = workExperienceLength - 1
    return (
      <Box p='4px'>
        {
          workExperience?.map((job, index) => {
            return (
              <VStack
                key={job.from + job.to}
                alignItems='flex-start'
                mb={index === lastIndex ? '0px' : '16px'}
                pb={index === lastIndex ? '0px' : '16px'}
                spacing={0}
                borderBottom={index === lastIndex ? 'none' : '2px solid'}
                borderColor='brand.white'
              >
                <Text fontWeight='600'>{job.employer}</Text>
                <HStack>
                  <Text fontWeight='600' color='brand.grey400'>{job.jobTitle}</Text>
                  <CustomTag text={job.type} color='brand.grey400' bg='brand.white' size='sm' />
                </HStack>
                <HStack margin='0' spacing={3} fontSize='14px'>
                  <Text color='brand.grey400'>{job.from} - {job.to}</Text>
                  <Text color='brand.grey400'>4 years 2 months</Text>
                </HStack>
              </VStack>
            )
          })
        }
      </Box>
    )
  }

  return (
    <Box mt='32px'>
      <BorderedTitledBox title='Work Experience (90% Match)' bg='brand.grey100'>
        {renderWorkExperience()}
      </BorderedTitledBox>
    </Box>
  )
}

export default WorkExperience