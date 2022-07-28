import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import BorderedListItem from '../../../../components/bordered-list-item'

type JobResponsibilitiesProps = {
  responsibilities: string[]
}

const JobResponsibilities = ({ responsibilities }: JobResponsibilitiesProps) => {
  return (
    <UnorderedList>
      {
        responsibilities?.map((responsibility, index) => {
          return <ListItem key={responsibility}>{responsibility}</ListItem>
        })
      }
    </UnorderedList>
  )
}

export default JobResponsibilities