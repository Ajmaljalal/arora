import { Box } from '@chakra-ui/react'
import React from 'react'
import DatePicker from '../../components/forms/date-picker'
import InputField from '../../components/forms/input'
import SelectField from '../../components/forms/select'
import { JobSummaryObject } from './utils'

type JobSummaryFormProps = {
  data: JobSummaryObject
  errors: any
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



const JobSummaryForm = ({ onChange, errors, data }: JobSummaryFormProps) => {
  return (
    <>
      <InputField value={data?.JobTitle} onChange={onChange} label='Job Title' isRequired={true} isInvalid={errors?.titleErr?.length > 0} errorMessage={errors?.titleErr} />
      <Box display='flex' justifyContent='space-between'>
        <SelectField value={data?.JobType} onChange={onChange} label='Job Type' width='48%' options={jobTypes} isRequired={true} isInvalid={errors?.typeErr?.length > 0} errorMessage={errors?.typeErr} />
        <SelectField value={data?.JobMethod} onChange={onChange} label='Job Method' width='48%' options={jobMethods} isRequired={true} isInvalid={errors?.methodErr?.length > 0} errorMessage={errors?.methodErr} />
      </Box>
      <Box display='flex' justifyContent='space-between'>
        <InputField value={data?.JobLocation} onChange={onChange} label='Job Location' width='48%' isRequired={true} isInvalid={errors?.locationErr?.length > 0} errorMessage={errors?.locationErr} />
        <InputField value={data?.ApplicationDeadline} onChange={onChange} label='Application Deadline' type='date' width='48%' isRequired={true} isInvalid={errors?.deadlineErr?.length > 0} errorMessage={errors?.deadlineErr} />
      </Box>
      <Box display='flex' justifyContent='space-between'>
        <InputField value={data?.Minsalary} onChange={onChange} label='Min Salary' width='48%' leftAddOn='$' type='number' isRequired={true} isInvalid={errors?.minSalaryErr?.length > 0} errorMessage={errors?.minSalaryErr} />
        <InputField value={data?.MaxSalary} onChange={onChange} label='Max Salary' width='48%' leftAddOn='$' type='number' isRequired={true} isInvalid={errors?.maxSalaryErr?.length > 0} errorMessage={errors?.maxSalaryErr} />
      </Box>
      <InputField value={data?.MinYearsofExperience} onChange={onChange} label='Min Years of Experience' type='number' isRequired={true} isInvalid={errors?.experienceErr?.length > 0} errorMessage={errors?.experienceErr} />

    </>
  )
}

export default JobSummaryForm