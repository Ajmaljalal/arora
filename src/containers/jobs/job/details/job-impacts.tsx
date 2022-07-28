import React from 'react'
import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import BorderedListItem from '../../../../components/bordered-list-item'

type JobImpactsProps = {
  impacts: any
}

const JobImpacts = ({ impacts }: JobImpactsProps) => {
  return (
    <Box>
      <Text color='brand.grey400' fontWeight='600'>In the first month: </Text>
      {impacts.firstMonth &&
        <Text>{impacts.firstMonth}</Text>}
      <Text color='brand.grey400' mt='15px' fontWeight='600'>In three months:</Text>
      {impacts.threeMonths &&
        <Text>{impacts.threeMonths}</Text>}
      <Text color='brand.grey400' mt='15px' fontWeight='600'>In one year:</Text>
      {impacts.oneYear &&
        <Text>{impacts.oneYear}</Text>}
    </Box>
  )
}

export default JobImpacts