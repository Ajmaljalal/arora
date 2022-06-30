import React from 'react'
import { Table, TableContainer, Tbody, Td, Thead, Text } from '@chakra-ui/react'
import TableRow from '../../../components/table/table-row'
import TableHeaderItem from '../../../components/table/table-header-item'
import CustomTag from '../../../components/tag'

const candidates = [
  {
    name: 'Leslie Alexander',
    appliedFor: 'React Developer',
    matching: 98,
    stage: 'Final round'
  },
  {
    name: 'Jane Cooper',
    appliedFor: 'UI/UX Designer',
    matching: 95,
    stage: 'Initial interview'
  },
  {
    name: 'Kristiin Watson',
    appliedFor: 'Front End Developer',
    matching: 85,
    stage: 'Offer negotiation'
  },
  {
    name: 'Cody Fisher',
    appliedFor: 'Full Stack Developer',
    matching: 74,
    stage: 'Phone Call'
  }
]

const Candidates = () => {

  const renderCandidatesList = () => {
    return (
      candidates.map((candidate) => {
        const matchingBgColor = candidate.matching >= 90 ? 'brand.secondaryLight' : candidate.matching <= 90 && candidate.matching >= 75 ? 'brand.primaryLight' : 'brand.grey200'
        const matchingBorderColor = candidate.matching >= 90 ? 'brand.darkGreen' : candidate.matching <= 90 && candidate.matching >= 75 ? 'brand.primary' : 'brand.grey500'
        return (
          <TableRow key={candidate.name}>
            <Td>{candidate.name}</Td>
            <Td>
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
            <Td textAlign='end'>{candidate.stage}</Td>
          </TableRow>

        )
      })
    )
  }
  return (
    <TableContainer width='100%' bg='brand.white' border='1px solid' borderColor='brand.grey200' borderRadius='4px'>
      <Table variant='unstyled'>
        <Thead>
          <TableRow>
            <TableHeaderItem text='Name' />
            <TableHeaderItem text='Matching' />
            <TableHeaderItem text='Hiring Stage' textAlign='end' />
          </TableRow>
        </Thead>
        <Tbody>
          {renderCandidatesList()}
        </Tbody>
      </Table>
    </TableContainer>
  )

}

export default Candidates