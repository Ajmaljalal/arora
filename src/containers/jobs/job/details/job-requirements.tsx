import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import BorderedListItem from '../../../../components/bordered-list-item'

type JobRequirementsProps = {
  requirements: string[]
}

const JobRequirements = ({ requirements }: JobRequirementsProps) => {
  return (
    <UnorderedList>
      {
        requirements?.map((requirement, index) => {
          return <ListItem key={requirement}>{requirement}</ListItem>
        })
      }
    </UnorderedList>
  )
}

export default JobRequirements