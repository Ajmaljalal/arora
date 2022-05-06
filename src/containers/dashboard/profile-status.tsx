import React from 'react'
import { Box, List, ListIcon, ListItem } from '@chakra-ui/react'
import TileWithHeader from '../../components/tiles/tile-with-header'
import GreenCheckIcon from '../../../public/assets/icons/dashboard/check-circle-green.svg'
import GreyCheckIcon from '../../../public/assets/icons/dashboard/check-circle-grey.svg'
import ChevronRightcon from '../../../public/assets/icons/chevron-right-blue.svg'
import Link from 'next/link'


const ProfileStatus = () => {

  const renderHeaderRight = () => {
    return (
      <Link href='/company-profile' passHref>
        <a>
          <ChevronRightcon />
        </a>
      </Link>
    )
  }

  const renderContent = () => {
    return (
      <Box
        p='15px 24px'
        display='flex'
        justifyContent='space-between'
        maxHeight='200px'
        height='200px'
        minWidth='300px'
        overflowY='auto'
      >
        <List spacing={3}>
          <ListItem fontSize='16px' fontWeight='400'>
            <ListIcon as={GreenCheckIcon} width='18px' height='18px' />
            Fill basic information
          </ListItem>
          <ListItem fontSize='16px' fontWeight='400'>
            <ListIcon as={GreenCheckIcon} width='18px' height='18px' />
            Set your timezone
          </ListItem>
          <ListItem fontSize='16px' fontWeight='400'>
            <ListIcon as={GreyCheckIcon} width='18px' height='18px' />
            Fill your contact infromation
          </ListItem>
          <ListItem fontSize='16px' fontWeight='400'>
            <ListIcon as={GreyCheckIcon} width='18px' height='18px' />
            Fill your contact infromation
          </ListItem>
          <ListItem fontSize='16px' fontWeight='400'>
            <ListIcon as={GreyCheckIcon} width='18px' height='18px' />
            Fill your contact infromation
          </ListItem>
        </List>
      </Box>
    )
  }


  return (
    <TileWithHeader
      title='Complete your profile (2/5)'
      body={renderContent()}
      headerRight={renderHeaderRight()}
    />
  )
}

export default ProfileStatus