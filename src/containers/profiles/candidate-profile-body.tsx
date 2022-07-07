import React from 'react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import ProfileSummary from './details/summary'

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
      <TabPanel p='0' style={{ height: 'calc(100vh - 160px' }} overflow='auto'>
        <ProfileSummary candidate={candidate} />
      </TabPanel>
    )
  }

  return (
    <Tabs>
      <TabList borderBottom='1px solid' borderColor='brand.grey200'>
        {renderTab('Details')}
        {renderTab('Resume')}
      </TabList>
      <TabPanels mt='20px'>
        {renderDetailsTab()}
        <TabPanel p='0' style={{ height: 'calc(100vh - 160px' }} >
          Resume
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default ProfileBody