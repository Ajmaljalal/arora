import { HStack } from '@chakra-ui/react'
import React from 'react'
import JobsColumn from './jobs-column'

type JobsListProps = {}

const jobColumns = [
  {
    name: 'Draft',
    color: 'brand.grey400'
  },
  {
    name: 'In review',
    color: 'brand.yellow'
  },
  {
    name: 'Reviewed',
    color: 'brand.orange'
  },
  {
    name: 'Published',
    color: 'brand.secondary'
  }
]

const JobsList = (props: JobsListProps) => {
  return (
    <HStack alignItems='flex-start' height='90%' overflow='hidden' spacing={2}>
      {jobColumns.map(column => {
        return <JobsColumn key={column.name} column={column} />
      })}
    </HStack>
  )
}

export default JobsList