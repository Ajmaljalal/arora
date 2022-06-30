import { Box } from '@chakra-ui/react'
import React from 'react'
import BorderedListItem from '../../../../components/bordered-list-item'

type JobResponsibilitiesProps = {
  responsibilities: string[]
}

const JobResponsibilities = ({ responsibilities }: JobResponsibilitiesProps) => {
  return (
    <Box>
      {
        responsibilities?.map((responsibility, index) => {
          return <BorderedListItem key={responsibility} text={responsibility} editable={false} bordered={false} />
        })
      }
    </Box>
  )
}

export default JobResponsibilities