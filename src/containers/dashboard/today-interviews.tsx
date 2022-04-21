import React from 'react'
import { Box, Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr, TypographyProps, Text, VStack, Tag, TagLabel } from '@chakra-ui/react'
import TileWithHeader from '../../components/tiles/tile-with-header'

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

  const TableRow = ({ children }) => {
    return (
      <Tr borderBottom='1px solid' borderColor='brand.grey200'>
        {children}
      </Tr>
    )
  }

  const renderTableTh = (text: string, textAlign?: TypographyProps['textAlign']) => {
    return (
      <Th color='brand.grey500' textAlign={textAlign}>
        {text}
      </Th>
    )
  }

  const renderInterviews = () => {
    return (
      todaysInterviews.map((interview) => {
        return (
          <TableRow key={interview.candidate}>
            <Td>
              <VStack align='start'>
                <Text fontSize='16px' fontWeight='600'>{interview.candidate}</Text>
                <Tag fontSize='12px' fontWeight='500' colorScheme='red' borderRadius='full'>
                  {`For ${interview.for}`}
                </Tag>
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
                {renderTableTh('Candidate')}
                {renderTableTh('Time')}
                {renderTableTh('Type', 'end')}
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