import React from 'react'
import { Table, TableContainer, Tbody, Tfoot, Thead } from '@chakra-ui/react'
import TableRow from '../../../../components/table/table-row'
import TableHeaderItem from '../../../../components/table/table-header-item'
import Candidate from './candidate'

const candidates = [
  {
    name: 'Leslie Alexander',
    appliedFor: 'React Developer',
    matching: 98,
    stage: 'Final round',
    rating: 5
  },
  {
    name: 'Jane Cooper',
    appliedFor: 'UI/UX Designer',
    matching: 95,
    stage: 'Initial interview',
    rating: 4
  },
  {
    name: 'Kristiin Watson',
    appliedFor: 'Front End Developer',
    matching: 85,
    stage: 'Offer negotiation',
    rating: 5
  },
  {
    name: 'Cody Fisher',
    appliedFor: 'Full Stack Developer',
    matching: 74,
    stage: 'Phone Call',
    rating: 4.5
  }

]

const Candidates = () => {

  const renderCandidatesList = () => {
    return (
      candidates.map((candidate) => {
        return (
          <Candidate key={candidate.name + candidate.stage} candidate={candidate} />
        )
      })
    )
  }
  return (
    <TableContainer width='100%' maxHeight='97%' overflowY='auto' bg='brand.white' borderRadius='4px'>
      <Table variant='unstyled'>
        <Thead position='sticky' top='0' bg='brand.grey200' zIndex='1000'>
          <TableRow>
            <TableHeaderItem text='Name' />
            <TableHeaderItem text='Matching' />
            <TableHeaderItem text='Rating' textAlign='center' />
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