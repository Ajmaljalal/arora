import React, { ChangeEvent, useState } from 'react'
import { Box, HStack, Tag, TagCloseButton, TagLabel, Text, Wrap } from '@chakra-ui/react'
import { JobSkillsObject } from './utils/objects'
import CustomTextArea from '../../components/form/text-area'
import CustomTag from '../../components/tag'

type JobSkillsFormProps = {
  data: JobSkillsObject
  onDelete: (item: string) => void
  onChange: (e) => void
}

const JobSkillsForm = ({ onChange, onDelete, data }: JobSkillsFormProps) => {

  const [fieldValue, setFieldValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFieldValue(e.target.value)
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && e.target.value.trim().length) {
      e.preventDefault()
      setFieldValue('')
      onChange(e)
    }
  }

  const handleEdit = (text: string) => {
    setFieldValue(text)
    onDelete(text)
  }

  const handleDelete = (text: string) => {
    onDelete(text)
  }

  const renderSkills = () => {
    return (
      <Wrap
        maxHeight='500px'
        overflowY='auto'
        borderRadius='4px'
        color='brand.grey400'
      >
        {
          data.skills?.map(skill => {
            return <CustomTag key={skill} text={skill} onClick={(text) => console.log(text)} color='brand.darkGreen' bg='brand.secondaryLight' />
          })
        }
      </Wrap>
    )
  }

  return (
    <>
      {renderSkills()}
      <CustomTextArea value={fieldValue} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  )
}

export default JobSkillsForm