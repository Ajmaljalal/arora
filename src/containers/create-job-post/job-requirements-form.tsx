import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { JobRequirementsObject } from './utils/objects'
import CustomTextArea from '../../components/form/text-area'
import BorderedListItem from '../../components/bordered-list-item'
import FormWrapper from '../../components/form/form-wrapper'

type JobRequirementsFormProps = {
  data: JobRequirementsObject
  onChange: (data: JobRequirementsObject) => void
}

const JobRequirementsForm = ({ onChange, data }: JobRequirementsFormProps) => {
  const [fieldValue, setFieldValue] = useState('')
  const [jobRequirements, setjobRequirements] = useState({ requirements: [], isComplete: false })

  useEffect(() => {
    setjobRequirements(data)
  }, [data])

  const handlejobRequirementsChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value: string = e.target.value
    let isComplete: boolean = false
    const requirements: string[] = jobRequirements.requirements
    if (requirements.includes(value)) return
    requirements.push(value)
    if (requirements.length) {
      isComplete = true
    }
    const formDataTemp = { requirements: requirements, isComplete: isComplete }
    onChange(formDataTemp)
  }

  const handleTextAreValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFieldValue(e.target.value)
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && e.target.value.trim().length) {
      e.preventDefault()
      setFieldValue('')
      handlejobRequirementsChange(e)
    }
  }

  const handleDelete = (requirementToRemove: string) => {
    const requirements: string[] = jobRequirements.requirements.filter((requirement) => requirement !== requirementToRemove)
    const isComplete = requirements.length > 0
    const formDataTemp = { requirements: requirements, isComplete: isComplete }
    onChange(formDataTemp)
  }

  const handleEdit = (text: string) => {
    setFieldValue(text)
    handleDelete(text)
  }

  return (
    <>
      <FormWrapper>
        {data.requirements?.map((requirement, index) => {
          return <BorderedListItem text={requirement} onDelete={handleDelete} onEdit={handleEdit} number={index + 1} />
        })}
      </FormWrapper>
      <CustomTextArea
        value={fieldValue}
        handleChange={handleTextAreValueChange}
        handleSubmit={handleSubmit}
        placeholderText='requirement'
      />
    </>
  )
}

export default JobRequirementsForm