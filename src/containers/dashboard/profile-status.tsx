import React from 'react'
import { Box, CircularProgress, CircularProgressLabel, Text } from '@chakra-ui/react'
import TileWithHeader from '../../components/tiles/tile-with-header'

type Props = {}

const ProfileStatus = () => {

  const renderContent = () => {
    return (
      <Box p='15px 24px' display='flex' justifyContent='space-between'>
        <Box>
          <Text fontSize='14px' fontWeight='500'>
            Completed (1/3)
          </Text>
        </Box>
        <Box>
          <CircularProgress value={40} color='brand.red' thickness='10px' size='100px'>
            <CircularProgressLabel>40%</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Box>
    )
  }


  return (
    <TileWithHeader
      title='Complete your profile'
      body={renderContent()}
    />
  )
}

export default ProfileStatus