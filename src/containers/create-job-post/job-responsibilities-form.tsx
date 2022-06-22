import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { JobResponsibilitiesObject } from './utils/objects'
import CustomTextArea from '../../components/form/text-area'
import BorderedListItem from '../../components/bordered-list-item'

type JobResponsibilitiesFormProps = {
  data: JobResponsibilitiesObject
  onChange: (data: JobResponsibilitiesObject) => void
}

const JobResponsibilitiesForm = ({ data, onChange }: JobResponsibilitiesFormProps) => {
  const [fieldValue, setFieldValue] = useState('')
  const [JobResponsibilities, setJobResponsibilities] = useState({ responsibilities: [], isComplete: false })

  useEffect(() => {
    setJobResponsibilities(data)
  }, [data])

  const handleJobResponsibilitiesChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value: string = e.target.value
    let isComplete: boolean = false
    const responsibilities: string[] = JobResponsibilities.responsibilities
    if (responsibilities.includes(value)) return
    responsibilities.push(value)
    if (responsibilities.length) {
      isComplete = true
    }
    const formDataTemp = { responsibilities: responsibilities, isComplete: isComplete }
    onChange(formDataTemp)
  }

  const handleTextAreValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFieldValue(e.target.value)
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && e.target.value.trim().length) {
      e.preventDefault()
      setFieldValue('')
      handleJobResponsibilitiesChange(e)
    }
  }

  const handleDelete = (requirementToRemove: string) => {
    const responsibilities: string[] = JobResponsibilities.responsibilities.filter((requirement) => requirement !== requirementToRemove)
    const isComplete = responsibilities.length > 0
    const formDataTemp = { responsibilities: responsibilities, isComplete: isComplete }
    onChange(formDataTemp)
  }

  const handleEdit = (text: string) => {
    setFieldValue(text)
    handleDelete(text)
  }

  return (
    <>
      <Box maxHeight='400px' overflowY='auto' mb='10px'>
        {data.responsibilities?.map((responsibility, index) => {
          return <BorderedListItem text={responsibility} onDelete={handleDelete} onEdit={handleEdit} number={index + 1} />
        })}
      </Box>
      <CustomTextArea
        value={fieldValue}
        handleChange={handleTextAreValueChange}
        handleSubmit={handleSubmit}
        placeholderText='responsibility'
      />
    </>
  )
}

export default JobResponsibilitiesForm


