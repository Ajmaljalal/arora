import React from 'react'
import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr, TypographyProps, Text, VStack, Tag } from '@chakra-ui/react'
import TileWithHeader from '../../components/tiles/tile-with-header'
import TableRow from '../../components/table/table-row'
import TableHeaderItem from '../../components/table/table-header-item'

const todaysInterviews = [
  {
    candidate: 'Jane Cooper',
    for: 'UI/UX Designer',
    time: '10 - 11:00 am',
    type: 'Initial interview'
  },
  {
    candidate: 'Cody Fisher',
    for: 'Full Stack Developer',
    time: '11 - 12:00 am',
    type: 'Phone Call'
  },
  {
    candidate: 'Leslie Alexander',
    for: 'React Developer',
    time: '2 - 3:00 pm',
    type: 'Final round'
  },
  {
    candidate: 'Kristiin Watson',
    for: 'Front End Developer',
    time: '3 - 3:30 pm',
    type: 'Offer negotiation'
  }
]

const TodaysInterviews = () => {

  const renderInterviews = () => {
    return (
      todaysInterviews.map((interview) => {
        return (
          <TableRow key={interview.candidate}>
            <Td>
              <VStack align='start' spacing={1}>
                <Text fontSize='16px' fontWeight='600'>{interview.candidate}</Text>
                <Text fontSize='10px' fontWeight='500' colorScheme='black' borderRadius='full'>
                  {`For ${interview.for}`}
                </Text>
              </VStack>
            </Td>
            <Td fontSize='14px'>{interview.time}</Td>
            <Td textAlign='end' fontSize='14px'>{interview.type}</Td>
          </TableRow>

        )
      })
    )
  }
  const renderContent = () => {
    return (
      <Box
        display='flex'
        justifyContent='space-between'
        maxHeight='500px'
        overflowY='auto'
      >
        <TableContainer width='100%'>
          <Table variant='unstyled'>
            <Thead>
              <TableRow>
                <TableHeaderItem text='Candidate' />
                <TableHeaderItem text='Time' />
                <TableHeaderItem text='Type' textAlign='end' />
              </TableRow>
            </Thead>
            <Tbody>
              {renderInterviews()}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    )
  }

  return (
    <TileWithHeader
      title="Today's interviews"
      body={renderContent()}
    />
  )
}

export default TodaysInterviews