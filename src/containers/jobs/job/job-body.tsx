import React from 'react'
import { Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import JobDetailsTile from './details/job-details-tile'
import Candidates from './candidates/candidates-list'
import TabHeader from '../../../components/tabs/tab-header'

type JobDetailsProps = {
  job: any
}

const JobDetailsBody = ({ job }: JobDetailsProps) => {
  if (!job) {
    return null
  }

  const renderDetailsTab = () => {
    return (
      <TabPanel p='0' pb='20px' style={{ height: 'calc(100vh - 220px' }} overflow='auto' position='relative'>
        <HStack spacing='16px' align='flex-start'>
          <VStack flex={2}>
            <JobDetailsTile title='Skills' content={job.jobSkills?.skills} />
            <JobDetailsTile title='Requirements' content={job.jobRequirements?.requirements} />
            <JobDetailsTile title='Responsibilities' content={job.jobResponsibilities.responsibilities} />
            <JobDetailsTile title='Impacts' content={job.jobImpacts} />
            <JobDetailsTile title='Description' content={job.jobDescription?.description} />
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
        <TabHeader text='Overview' />
        <TabHeader text='Candidates' />
      </TabList>
      <TabPanels mt='16px'>
        {renderDetailsTab()}
        <TabPanel p='0' style={{ height: 'calc(100vh - 220px' }} pb='20px' overflow='auto'>
          <Candidates />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default JobDetailsBody