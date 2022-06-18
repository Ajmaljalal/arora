import { Box } from '@chakra-ui/react'
import React from 'react'
import InputField from '../../components/form/input'
import SelectField from '../../components/form/select'
import { JobSummaryObject } from './utils/objects'

type JobSummaryFormProps = {
  data: JobSummaryObject
  onChange: (e) => void
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



const JobSummaryForm = ({ onChange, data }: JobSummaryFormProps) => {
  return (
    <>
      <InputField value={data?.JobTitle} onChange={onChange} label='Job Title' isRequired={true} />
      <Box display='flex' justifyContent='space-between'>
        <SelectField value={data?.JobType} onChange={onChange} label='Job Type' width='48%' options={jobTypes} />
        <SelectField value={data?.JobMethod} onChange={onChange} label='Job Method' width='48%' options={jobMethods} isRequired={true} />
      </Box>
      <Box display='flex' justifyContent='space-between'>
        <InputField value={data?.JobLocation} onChange={onChange} label='Job Location' width='48%' isRequired={true} />
        <InputField value={data?.ApplicationDeadline} onChange={onChange} label='Application Deadline' type='date' width='48%' isRequired={true} />
      </Box>
      <Box display='flex' justifyContent='space-between'>
        <InputField value={data?.MinSalary} onChange={onChange} label='Min Salary' width='48%' leftAddOn='$' type='number' isRequired={true} />
        <InputField value={data?.MaxSalary} onChange={onChange} label='Max Salary' width='48%' leftAddOn='$' type='number' isRequired={true} />
      </Box>
      <InputField value={data?.MinYearsofExperience} onChange={onChange} label='Min Years of Experience' type='number' isRequired={true} />

    </>
  )
}

export default JobSummaryForm