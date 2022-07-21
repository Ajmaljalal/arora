import { ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

type CultureProps = {
  culture: string[]
}

const Culture = ({ culture }: CultureProps) => {
  return (
    <UnorderedList>
      {
        culture?.map(cultureItem => {
          return (
            <ListItem>{cultureItem}</ListItem>
          )
        })
      }
    </UnorderedList>

  )
}

export default Culture