import React from 'react'
import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import JobDetailsTile from './details/job-details-tile'

type JobDetailsProps = {
  job: any
}

const JobDetailsBody = ({ job }: JobDetailsProps) => {
  if (!job) {
    return null
  }


  const renderTab = (text: string) => {
    return (
      <Tab
        p='0'
        mr='40px'
        color='brand.grey400'
        fontSize='16px'
        _focus={{ shadow: 'none' }}
        _selected={{ color: 'brand.black', fontWeight: '600', borderBottom: '2px solid', borderColor: 'brand.primary' }}
      >
        {text.toUpperCase()}
      </Tab>
    )
  }

  const renderDetailsTab = () => {
    return (
      <TabPanel p='0' style={{ height: 'calc(100vh - 240px' }} overflow='auto' position='relative'>
        <HStack spacing='16px' align='flex-start'>
          <VStack flex={2}>
            <JobDetailsTile title='Description' content={job.jobDescription?.description} />
            <JobDetailsTile title='Skills' content={job.jobSkills?.skills} />
            <JobDetailsTile title='Requirements' content={job.jobRequirements?.requirements} />
            <JobDetailsTile title='Responsibilities' content={job.jobResponsibilities.responsibilities} />
            <JobDetailsTile title='Impacts' content={job.jobImpacts} />
          </VStack>
          <VStack
            flex={1}
            position='sticky'
            top='0'
          >
            <JobDetailsTile title='Summary' content={job.jobSummary} />
            <JobDetailsTile title='Benefits' content={{ benefits: 'No benefits' }} />
          </VStack>
        </HStack>
      </TabPanel>
    )
  }

  return (
    <Tabs>
      <TabList borderBottom='2px solid' borderColor='brand.grey200'>
        {renderTab('job details')}
        {renderTab('candidates')}
        {renderTab('company')}
        {renderTab('recruiter')}
      </TabList>
      <TabPanels mt='32px'>
        {renderDetailsTab()}
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default JobDetailsBody