import React, { useState } from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import RatingView from '../../../components/rating/rating-view'
import DropdownList from '../../../components/dropdown/dropdown'
import ChatIcon from '../../../../public/assets/icons/chat.svg'
import TrashIcon from '../../../../public/assets/icons/trash-empty.svg'

type ProfileHeaderProps = {
  candidate: any
}

const ProfileHeader = ({ candidate }: ProfileHeaderProps) => {
  const [selectedStage, setSelectedStage] = useState(candidate.stage)

  const handleDropdownItemChange = (stageName: string) => {
    setSelectedStage(stageName)
  }

  const renderMatching = () => {
    return (
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
    )
  }

  const renderRoleAndReviews = () => {
    return (
      <HStack
        color='brand.grey500'
        fontSize='14px'
        fontWeight='400'
        alignItems='center'
        mt='4px'
      >
        <Text>Full Stack Developer</Text>
        <HStack bg='brand.grey100' px='8px' borderRadius='10px' spacing={2}>
          <RatingView rating={candidate.rating} />
          <Text>(24 reviews)</Text>
        </HStack>
      </HStack>
    )
  }

  const renderStages = (pipeline: any) => {
    return (
      <Box
        fontSize='16px'
        bg='brand.grey100'
        border='0.5px solid'
        borderColor='brand.grey50'
        borderRadius='4px'
        width='fit-content'
      >
        <DropdownList
          key={pipeline.id}
          selectedItem={selectedStage}
          items={['Interview', 'Screening', 'Hired', 'Rejected']}
          onSelectItem={handleDropdownItemChange}
          width='180px'
        />
      </Box>
    )
  }

  const renderActionBtnsList = () => {
    return (
      <HStack alignItems='center'>
        {renderActionBtn('Drop candidate', 'brand.red', <TrashIcon />)}
        {renderActionBtn('Send a message', 'brand.primary', <ChatIcon />)}
      </HStack>
    )
  }

  const renderActionBtn = (text: string, color, icon: any) => {
    return (
      <HStack
        fontSize='16px'
        fontWeight='400'
        color={color}
        cursor='pointer'
        spacing={1}
        mr='8px'
      >
        <Text>{text}</Text>
        {icon}
      </HStack>
    )
  }

  return (
    <HStack alignItems='center' justifyContent='center' pl='16px'>
      <Box width='100%'>
        <HStack>
          <Text>{candidate.name} </Text>
          {renderMatching()}
        </HStack>
        {renderRoleAndReviews()}
        <HStack
          alignItems='center'
          justifyContent='space-between'
          mt='8px'
          spacing={6}
        >
          {renderStages({})}
          {renderActionBtnsList()}
        </HStack>
      </Box>
    </HStack >

  )
}

export default ProfileHeader