import { Box } from '@chakra-ui/react'
import React from 'react'
import DatePicker from '../../components/forms/date-picker'
import InputField from '../../components/forms/input'
import SelectField from '../../components/forms/select'

type JobSummaryFormProps = {
  onChange?: () => void
}

const jobTypes = [
  'Full time',
  'Part time',
  'Contract'
]

const jobMethods = [
  'Remote | work from home',
  'In person | work from office',
  'Hybrid | work from home and office'
]



const JobSummaryForm = ({ onChange }: JobSummaryFormProps) => {
  return (
    <>
      <InputField onChange={onChange} label='Job title' />
      <Box display='flex' justifyContent='space-between'>
        <SelectField onChange={onChange} label='Job Type' width='48%' options={jobTypes} />
        <SelectField onChange={onChange} label='Job method' width='48%' options={jobMethods} />
      </Box>
      <Box display='flex' justifyContent='space-between'>
        <InputField onChange={onChange} label='Job location' width='48%' />
        <InputField onChange={onChange} label='Application deadline' type='date' width='48%' />

      </Box>
      <Box display='flex' justifyContent='space-between'>
        <InputField onChange={onChange} label='Minimum salary' width='48%' leftAddOn='$' type='number' />
        <InputField onChange={onChange} label='Maximum salary' width='48%' leftAddOn='$' type='number' />
      </Box>
      <InputField onChange={onChange} label='Minimum Years of experience (digits only)' type='number' />

    </>
  )
}

export default JobSummaryForm