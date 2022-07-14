import React, { useState } from 'react'
import { Avatar, HStack, Td, Text, useDisclosure } from '@chakra-ui/react'
import TableRow from '../../../../components/table/table-row'
import DropdownList from '../../../../components/dropdown/dropdown'
import CandidateProfile from '../../../candidate-profile/drawer-view/candidate-profile'
import RatingView from '../../../../components/rating/rating-view'

type CandidateProps = {
  candidate: any
}

const Candidate = ({ candidate }: CandidateProps) => {
  const [selectedStage, setSelectedStage] = useState(candidate.stage)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const matchingBgColor = candidate.matching >= 90 ? 'brand.secondaryLight' : candidate.matching <= 90 && candidate.matching >= 75 ? 'brand.primaryLight' : 'brand.grey200'
  const matchingBorderColor = candidate.matching >= 90 ? 'brand.darkGreen' : candidate.matching <= 90 && candidate.matching >= 75 ? 'brand.primary' : 'brand.grey500'

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
        width='200px'
      />
    )
  }

  return (
    <>
      <TableRow key={candidate.name}>
        <Td width='350px' onClick={onOpen}>
          <HStack>
            <Avatar
              name={candidate.name}
              size='sm'
            />
            <Text>{candidate.name}</Text>
          </HStack>
        </Td>
        <Td width='100px' display='flex' justifyContent='center' onClick={onOpen}>
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
        <Td textAlign='end' width='fit-content'>{renderStages({})}</Td>
      </TableRow>
      <CandidateProfile onClose={onClose} isOpen={isOpen} candidateId={candidate.id} />
    </>
  )
}

export default Candidate