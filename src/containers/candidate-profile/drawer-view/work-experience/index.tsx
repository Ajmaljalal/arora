import React from 'react'
import { Box, VStack, Text, HStack, List, ListItem, UnorderedList } from '@chakra-ui/react'
import BorderedTitledBox from '../../../../components/layouts/bordered-titled-box'
import CustomTag from '../../../../components/tag'

type WorkExperience = {
  workExperience: any
}

const WorkExperience = ({ workExperience }: WorkExperience) => {

  const renderWorkExperienceImpacts = (job) => {
    return (
      <UnorderedList pl='16px' pt='4px'>
        {
          job.impacts.map((impact) => {
            return (
              <ListItem>
                {impact}
              </ListItem>
            )
          })
        }
      </UnorderedList>
    )
  }

  const renderWorkExperience = () => {
    const workExperienceLength = workExperience?.length
    const lastIndex = workExperienceLength - 1
    return (
      <Box pl='4px'>
        {
          workExperience?.map((job, index) => {
            const fromDate = new Date(job.from).toLocaleDateString('en-us', { year: "numeric", month: "short" })
            const toDate = new Date(job.to).toLocaleDateString('en-us', { year: "numeric", month: "short" })
            return (
              <VStack
                key={job.from + job.to}
                alignItems='flex-start'
                mb={index === lastIndex ? '0px' : '16px'}
                pb={index === lastIndex ? '0px' : '16px'}
                spacing={0}
                borderBottom={index === lastIndex ? 'none' : '1px solid'}
                borderColor='brand.grey200'
              >
                <Text fontWeight='600'>{job.employer}</Text>
                <Text fontWeight='600' color='brand.grey400'>{job.jobTitle}</Text>
                <HStack>
                  <Text fontSize='14px' color='brand.grey400'>{fromDate} - {toDate}</Text>
                  <CustomTag text={job.type} color='brand.grey400' bg='brand.grey100' size='md' />
                </HStack>
                {renderWorkExperienceImpacts(job)}
              </VStack>
            )
          })
        }
      </Box>
    )
  }

  return (
    <BorderedTitledBox>
      {renderWorkExperience()}
    </BorderedTitledBox>
  )
}

export default WorkExperience