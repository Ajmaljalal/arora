import React, { useState } from 'react'
import { Box, HStack, Text, Tr, useDisclosure } from '@chakra-ui/react'
import RatingView from '../../../components/rating/rating-view'
import DropdownList from '../../../components/dropdown/dropdown'
import ChatIcon from '../../../../public/assets/icons/chat.svg'
import TrashIcon from '../../../../public/assets/icons/trash-empty.svg'
import AlertModal from '../../../components/alerts/alert-modal'

type ProfileHeaderProps = {
  candidate: any
}

const ProfileHeader = ({ candidate }: ProfileHeaderProps) => {
  const [selectedStage, setSelectedStage] = useState(candidate.stage)
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        <Box onClick={onOpen} cursor='pointer'><TrashIcon /></Box>
        <Box cursor='pointer'><ChatIcon /></Box>
      </HStack>
    )
  }


  return (
    <>
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
            pr='32px'
          >
            {renderStages({})}
            {renderActionBtnsList()}
          </HStack>
        </Box>
      </HStack >
      <AlertModal
        title='Drop Candidate?'
        content={`Are you sure you want to drop '${candidate.name}'?`}
        isOpen={isOpen}
        onClose={onClose}
        footerBtns={['No', 'Yes']}
      />
    </>

  )
}

export default ProfileHeader