import React from 'react'
import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import RatingView from '../../components/rating/rating-view'

type ProfileHeaderProps = {
  candidate: any
}

const ProfileHeader = ({ candidate }: ProfileHeaderProps) => {
  return (

    <HStack spacing={3}>
      <Avatar
        size='lg'
        name={candidate.name}
      />
      <Box>
        <Text>{candidate.name} </Text>
        <HStack
          color='brand.grey500'
          fontSize='14px'
          fontWeight='400'
          alignItems='flex-start'
        >
          <Text>
            Full Stack Developer
          </Text>
          <HStack bg='brand.grey200' px='8px' borderRadius='10px' fontSize='14px' spacing={2}>
            <RatingView rating={candidate.rating} />
            <Text>(24 reviews)</Text>
          </HStack>
        </HStack>
        <Box
          border='1px solid'
          borderColor='brand.secondary'
          borderRadius='4px'
          color='brand.darkGreen'
          bg='brand.secondaryLight'
          p='4px 8px'
          fontSize='14px'
          width='167px'
          mt='4px'
        >
          98% Matching Profile
        </Box>
      </Box>
    </HStack>

  )
}

export default ProfileHeader