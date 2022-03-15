import React from 'react'
import { Box, Flex, Grid, GridItem, HStack, Wrap } from '@chakra-ui/react'
import JobStatusCardItem from './job-status-card-item'


const JobStatusCardsList = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={8}>
      <Wrap flex={1} justify='space-between'>
        <JobStatusCardItem number={23} type='draft' />
        <JobStatusCardItem number={45} type='inReview' />
      </Wrap>
      <Wrap flex={1} justify='space-between'>
        <JobStatusCardItem number={10} type='reviewed' />
        <JobStatusCardItem number={40} type='published' />
      </Wrap>
    </Grid>
  )
}

export default JobStatusCardsList