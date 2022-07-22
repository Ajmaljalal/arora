import { ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

type BenefitsProps = {
  benefits: string[]
}

const Benefits = ({ benefits }: BenefitsProps) => {
  return (
    <UnorderedList>
      {
        benefits?.map(benefit => {
          return (
            <ListItem key={benefit}>{benefit}</ListItem>
          )
        })
      }
    </UnorderedList>

  )
}

export default Benefits