import React from 'react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import ProfileSummary from './details/summary'
import WorkExperience from './details/work-experience'
import DetailedWorkExperience from './work-experience'
import Education from './details/education'

type ProfileBodyProps = {
  candidate: any
}

const ProfileBody = ({ candidate }: ProfileBodyProps) => {
  if (!candidate) {
    return null
  }

  const renderTab = (text: string) => {
    return (
      <Tab
        p='0'
        mr='32px'
        color='brand.grey400'
        _focus={{ shadow: 'none' }}
        _selected={{ color: 'brand.black', borderBottom: '3px solid', borderColor: 'brand.primary' }}
      >
        {text}
      </Tab>
    )
  }

  const renderDetailsTab = () => {
    return (
      <TabPanel p='0'>
        <ProfileSummary candidate={candidate} />
        <WorkExperience workExperience={candidate.workHistory} />
        <Education educations={candidate.educations} />
      </TabPanel>
    )
  }

  const renderWorkExperienceTab = () => {
    return (
      <TabPanel p='0'>
        <DetailedWorkExperience workExperience={candidate.workHistory} />
      </TabPanel>
    )
  }

  return (
    <Tabs>
      <TabList borderBottom='1px solid' borderColor='brand.grey200'>
        {renderTab('Overview')}
        {renderTab('Work experience')}
        {/* {renderTab('Reviews')} */}
        {/* {renderTab('References')} */}
        {renderTab('Score card & Notes')}
        {/* {renderTab('Resume')} */}
      </TabList>
      <TabPanels mt='20px' pb='50px' style={{ height: 'calc(100vh - 160px' }} overflow='auto'>
        {renderDetailsTab()}
        {renderWorkExperienceTab()}
      </TabPanels>
    </Tabs>
  )
}

export default ProfileBody