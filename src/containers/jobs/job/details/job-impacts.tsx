import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import BorderedListItem from '../../../../components/bordered-list-item'

type JobImpactsProps = {
  impacts: any
}

const JobImpacts = ({ impacts }: JobImpactsProps) => {
  console.log('impacts: ', impacts)
  return (
    <Box>
      <Text color='brand.grey400'>In the first month: </Text>
      {impacts.firstMonth &&
        <BorderedListItem text={impacts.firstMonth} bordered={false} editable={false} />}
      <Text color='brand.grey400' mt='15px'>In three months:</Text>
      {impacts.threeMonths &&
        <BorderedListItem text={impacts.firstMonth} bordered={false} editable={false} />}
      <Text color='brand.grey400' mt='15px'>In one year:</Text>
      {impacts.oneYear &&
        <BorderedListItem text={impacts.firstMonth} bordered={false} editable={false} />}
    </Box>
  )
}

export default JobImpacts