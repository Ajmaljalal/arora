import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Wrap } from '@chakra-ui/react'
import { JobSkillsObject } from './utils/objects'
import CustomTextArea from '../../components/form/text-area'
import CustomTag from '../../components/tag'
import FormWrapper from '../../components/form/form-wrapper'

type JobSkillsFormProps = {
  data: JobSkillsObject
  onChange: (data: JobSkillsObject) => void
}

const JobSkillsForm = ({ onChange, data }: JobSkillsFormProps) => {
  const [fieldValue, setFieldValue] = useState('')
  const [jobSkills, setJobSkills] = useState({ skills: [], isComplete: false })

  useEffect(() => {
    setJobSkills(data)
  }, [data])

  const handleJobSkillsChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value: string = e.target.value
    let isComplete: boolean = false
    const skills: string[] = jobSkills.skills
    if (skills.includes(value)) return
    skills.push(value)
    if (skills.length) {
      isComplete = true
    }
    const formDataTemp = { skills: skills, isComplete: isComplete }
    onChange(formDataTemp)
  }

  const handleTextAreValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFieldValue(e.target.value)
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && e.target.value.trim().length) {
      e.preventDefault()
      setFieldValue('')
      handleJobSkillsChange(e)
    }
  }

  const handleDelete = (skillToRemove: string) => {
    const skills: string[] = jobSkills.skills.filter((skill) => skill !== skillToRemove)
    const isComplete = skills.length > 0
    const formDataTemp = { skills: skills, isComplete: isComplete }
    onChange(formDataTemp)
  }

  const renderSkills = () => {
    return (
      <Wrap
        maxHeight='400px'
        overflowY='hidden'
        overflowX='hidden'
        borderRadius='4px'
        color='brand.grey400'
        mb='10px'
      >
        {
          data.skills?.map(skill => {
            return (
              <CustomTag
                key={skill}
                text={skill}
                onClick={() => handleDelete(skill)}
                color='brand.darkGreen'
                bg='brand.secondaryLight' />
            )
          })
        }
      </Wrap>
    )
  }

  return (
    <>
      {data?.skills.length > 0 &&
        <FormWrapper>
          {renderSkills()}
        </FormWrapper>
      }
      <CustomTextArea
        value={fieldValue}
        handleChange={handleTextAreValueChange}
        handleSubmit={handleSubmit}
        placeholderText='skill'
      />
    </>
  )
}

export default JobSkillsForm