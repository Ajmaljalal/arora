import React, { useState } from 'react'
import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import RatingView from '../../components/rating/rating-view'
import DropdownList from '../../components/dropdown/dropdown'

type ProfileHeaderProps = {
  candidate: any
}

const ProfileHeader = ({ candidate }: ProfileHeaderProps) => {
  const [selectedStage, setSelectedStage] = useState(candidate.stage)

  const handleDropdownItemChange = (stageName: string) => {
    setSelectedStage(stageName)
  }

  const renderStages = (pipeline: any) => {
    return (
      <DropdownList
        key={pipeline.id}
        selectedItem={selectedStage}
        items={['Interview', 'Screening', 'Hired', 'Rejected']}
        onSelectItem={handleDropdownItemChange}
        width='180px'
      />
    )
  }

  return (
    <HStack spacing={3} alignItems='flex-start'>
      <Avatar
        size='lg'
        name={candidate.name}
      />
      <Box width='100%'>
        <HStack>
          <Text>{candidate.name} </Text>
          <Box
            border='1px solid'
            borderColor='brand.secondary'
            borderRadius='20px'
            color='brand.darkGreen'
            bg='brand.secondaryLight'
            p='0px 8px'
            fontSize='14px'
            width='fit-content'
          >
            98% Match
          </Box>

        </HStack>
        <HStack
          color='brand.grey500'
          fontSize='14px'
          fontWeight='400'
          alignItems='center'
        >
          <Text>
            Full Stack Developer
          </Text>
          <HStack bg='brand.grey100' px='8px' borderRadius='10px' fontSize='14px' spacing={2}>
            <RatingView rating={candidate.rating} />
            <Text>(24 reviews)</Text>
          </HStack>

        </HStack>
        <HStack mt='5px' alignItems='flex-start' width='100%'>
          <Box fontSize='16px' bg='brand.grey100' borderRadius='4px' pl='8px'>Move to next stage: {renderStages({})}</Box>
        </HStack>
      </Box>
    </HStack>

  )
}

export default ProfileHeader