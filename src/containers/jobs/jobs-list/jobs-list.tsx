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
    <HStack alignItems='flex-start' height='calc(100% - 90px)' overflow='auto' spacing={3}>
      {jobColumns.map(column => {
        return <JobsColumn key={column.name} column={column} />
      })}
    </HStack>
  )
}

export default JobsList