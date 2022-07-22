import React from 'react'
import { TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import TabHeader from '../../components/tabs/tab-header'
import CompanyProfileDetails from './profile-details'
import CompanyProfileReviews from './company-reviews'

type ProfileBodyProps = {
  company: any
}

const ProfileBody = ({ company }: ProfileBodyProps) => {
  if (!company) {
    return null
  }

  const renderProfileOveriew = () => {
    return (
      <TabPanel p='0' pb='20px' style={{ height: 'calc(100vh - 220px' }} overflow='auto' position='relative'>
        <CompanyProfileDetails company={company} />
      </TabPanel>
    )
  }
  const renderProfileReviews = () => {
    return (
      <TabPanel p='0' pb='20px' style={{ height: 'calc(100vh - 220px' }} overflow='auto' position='relative'>
        <CompanyProfileReviews company={company} />
      </TabPanel>
    )
  }

  return (
    <Tabs>
      <TabList borderBottom='1px solid' borderColor='brand.grey200'>
        <TabHeader text='Overview' />
        <TabHeader text='Reviews' />
        <TabHeader text='Gallery' />
      </TabList>
      <TabPanels mt='16px'>
        {renderProfileOveriew()}
        {renderProfileReviews()}
      </TabPanels>
    </Tabs>
  )
}

export default ProfileBody