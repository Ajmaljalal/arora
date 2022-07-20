import React, { useState } from 'react'
import { Avatar, Box, HStack, Td, Text, useDisclosure } from '@chakra-ui/react'
import TableRow from '../../../../components/table/table-row'
import DropdownList from '../../../../components/dropdown/list'
import CandidateProfile from '../../../candidate-profile/drawer-view/candidate-profile'
import RatingView from '../../../../components/rating/rating-view'
import ChatIcon from '../../../../../public/assets/icons/chat.svg'
import TrashIcon from '../../../../../public/assets/icons/trash-empty.svg'
import AlertModal from '../../../../components/alerts/alert-modal'

type CandidateProps = {
  candidate: any
}

const Candidate = ({ candidate }: CandidateProps) => {
  const [selectedStage, setSelectedStage] = useState(candidate.stage)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isAlertModalOpen, toggleAlertModal] = useState(false)
  const matchingBgColor = candidate.matching >= 90 ? 'brand.secondaryLight' : candidate.matching <= 90 && candidate.matching >= 75 ? 'brand.primaryLight' : 'brand.grey200'
  const matchingBorderColor = candidate.matching >= 90 ? 'brand.darkGreen' : candidate.matching <= 90 && candidate.matching >= 75 ? 'brand.primary' : 'brand.grey500'

  const handleDropdownItemChange = (stageName: string) => {
    setSelectedStage(stageName)
  }

  const handleAlertModalToggle = () => {
    toggleAlertModal(!isAlertModalOpen)
  }

  const renderStages = (pipeline: any) => {
    return (
      <DropdownList
        key={pipeline.id}
        selectedItem={selectedStage}
        items={['Interview', 'Screening', 'Hired', 'Rejected']}
        onSelectItem={handleDropdownItemChange}
        width='200px'
      />
    )
  }

  return (
    <>
      <TableRow key={candidate.name}>
        <Td onClick={onOpen}>
          <HStack>
            <Avatar
              name={candidate.name}
              size='sm'
            />
            <Text>{candidate.name}</Text>
          </HStack>
        </Td>
        <Td onClick={onOpen}>
          <Text
            bg={matchingBgColor}
            color={matchingBorderColor}
            fontWeight='500'
            width='50px'
            height='28px'
            border='1px solid'
            borderColor={matchingBorderColor}
            borderRadius='4px'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            {`${candidate.matching.toString()}%`}
          </Text>
        </Td>
        <Td textAlign='center' onClick={onOpen}><RatingView rating={candidate.rating} /></Td>
        <Td>{renderStages({})}</Td>
        <Td textAlign='end' display='flex' justifyContent='flex-end'>
          <Box mr='8px' onClick={handleAlertModalToggle}><TrashIcon /></Box>
          <ChatIcon />
        </Td>
      </TableRow>
      <CandidateProfile onClose={onClose} isOpen={isOpen} candidateId={candidate.id} />
      <AlertModal
        title='Drop Candidate?'
        content={`Are you sure you want to drop '${candidate.name}'?`}
        isOpen={isAlertModalOpen}
        onClose={handleAlertModalToggle}
        footerBtns={['No', 'Yes']}
      />
    </>
  )
}

export default Candidate