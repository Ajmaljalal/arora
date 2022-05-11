import React from 'react'
import { Box, HStack, List, ListItem, Text, Badge } from '@chakra-ui/react'
import TileWithHeader from '../../components/tiles/tile-with-header'
import ChevronRightcon from '../../../public/assets/icons/chevron-right-blue.svg'
import Link from 'next/link'


const NewApplications = () => {

  const renderHeaderRight = () => {
    return (
      <Link href='/candidates' passHref>
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
        minWidth='300px'
        overflowY='auto'
      >
        <List spacing={3} width='260px'>
          <ListItem fontSize='16px' fontWeight='400'>
            <HStack justify='space-between'>
              <Text width='220px'>React Developer</Text>
              <Badge textAlign='center' width='35px' color='secondary' borderRadius='10px' bg='brand.secondaryLight' border='1px solid' borderColor='brand.secondary'>50</Badge>
            </HStack>
          </ListItem>
          <ListItem fontSize='16px' fontWeight='400'>
            <HStack justify='space-between'>
              <Text>Front End Developer</Text>
              <Badge textAlign='center' width='35px' color='red' borderRadius='10px' bg='brand.lightOrange' border='1px solid' borderColor='brand.red'>5</Badge>
            </HStack>
          </ListItem>
          <ListItem fontSize='16px' fontWeight='400'>
            <HStack justify='space-between'>
              <Text>Data Scienc Engineer</Text>
              <Badge textAlign='center' width='35px' color='brand.black' borderRadius='10px' bg='brand.lightYellow' px='10px' border='1px solid' borderColor='brand.yellow'>15</Badge>
            </HStack>
          </ListItem>
          <ListItem fontSize='16px' fontWeight='400'>
            <HStack justify='space-between'>
              <Text>UI/UX Designer</Text>
              <Badge textAlign='center' width='35px' color='brand.black' borderRadius='10px' bg='brand.lightYellow' px='10px' border='1px solid' borderColor='brand.yellow'>20</Badge>
            </HStack>
          </ListItem>
        </List>
      </Box>
    )
  }


  return (
    <TileWithHeader
      title='New applications (45)'
      body={renderContent()}
      headerRight={renderHeaderRight()}
    />
  )
}

export default NewApplications