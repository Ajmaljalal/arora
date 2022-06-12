import { Box, FormControl, FormErrorMessage, FormLabel, HStack, Input } from '@chakra-ui/react'
import React from 'react'
import InputField from '../../components/forms/input'

type JobSummaryFormProps = {
  onChange?: () => void
}

const JobSummaryForm = ({ onChange }: JobSummaryFormProps) => {
  return (
    <>
      <InputField onChange={onChange} label='Job title' />
      <Box display='flex' justifyContent='space-between'>
        <InputField onChange={onChange} label='Job type' width='48%' />
        <InputField onChange={onChange} label='Job method' width='48%' />
      </Box>
      <InputField onChange={onChange} label='Job location' />
      <InputField onChange={onChange} label='Salary' />
      <InputField onChange={onChange} label='Minimum required experience' />
      <InputField onChange={onChange} label='Application deadline' />
    </>
  )
}

export default JobSummaryForm