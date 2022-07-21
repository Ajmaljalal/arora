import React from 'react'
import { Table, TableContainer, Tbody, Thead } from '@chakra-ui/react'
import TableRow from '../../../../components/table/table-row'
import TableHeaderItem from '../../../../components/table/table-header-item'
import Candidate from './candidate'
import { candidates } from '../../../../data'

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
    <TableContainer width='100%' maxHeight='100%' overflowY='auto' bg='brand.white' borderRadius='4px'>
      <Table variant='unstyled'>
        <Thead position='sticky' top='0' bg='brand.grey200' zIndex='1000'>
          <TableRow>
            <TableHeaderItem text='Name' />
            <TableHeaderItem text='Matching' />
            <TableHeaderItem text='Rating' />
            <TableHeaderItem text='Hiring Stage' />
            <TableHeaderItem text='' textAlign='end' orderIcon={false} />
          </TableRow>
        </Thead>
        <Tbody>
          {renderCandidatesList()}
          {renderCandidatesList()}
          {renderCandidatesList()}
          {renderCandidatesList()}
        </Tbody>
      </Table>
    </TableContainer>
  )

}

export default Candidates