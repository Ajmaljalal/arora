import React from 'react'
import { HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from '@chakra-ui/react'
import ProfileDetailTile from './profile-details/profile-details-tile'

type ProfileDetailsBodyProps = {
  company: any
}

const ProfileDetailsBody = ({ company }: ProfileDetailsBodyProps) => {
  if (!company) {
    return null
  }

  const renderTab = (text: string) => {
    return (
      <Tab
        p='0'
        mr='40px'
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
      <TabPanel p='0' pb='20px' style={{ height: 'calc(100vh - 240px' }} overflow='auto' position='relative'>
        <HStack spacing='16px' align='flex-start'>
          <VStack flex={2}>
            <ProfileDetailTile title='About' content={company.about} />
            <ProfileDetailTile title='Culture' content={company.culture} />
            <ProfileDetailTile title='Benefits' content={company.benefits} />
          </VStack>
          <VStack flex={1} position='sticky' top='0'>
            <ProfileDetailTile title='Summary' content={''} />
            <ProfileDetailTile title='Benefits' content={company.benefits} />
          </VStack>
        </HStack>
      </TabPanel>
    )
  }

  return (
    <Tabs>
      <TabList borderBottom='2px solid' borderColor='brand.grey200'>
        {renderTab('Company details')}
        {renderTab('Jop openings')}
        {renderTab('Reviews')}
        {renderTab('Gallery')}
      </TabList>
      <TabPanels mt='32px'>
        {renderDetailsTab()}
        <TabPanel p='0' style={{ height: 'calc(100vh - 240px' }} >
          second one
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default ProfileDetailsBody