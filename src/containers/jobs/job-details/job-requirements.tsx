import { Box } from '@chakra-ui/react'
import React from 'react'
import BorderedListItem from '../../../components/bordered-list-item'

type JobRequirementsProps = {
  requirements: string[]
}

const JobRequirements = ({ requirements }: JobRequirementsProps) => {
  return (
    <Box>
      {
        requirements?.map((requirement, index) => {
          return <BorderedListItem key={requirement} text={requirement} editable={false} bordered={false} />
        })
      }
    </Box>
  )
}

export default JobRequirements