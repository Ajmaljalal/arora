import React, { ChangeEvent, useState } from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import { JobResponsibilitiesObject } from './utils/objects'
import TrashIcon from '../../../public/assets/icons/trash-empty.svg'
import EditIcon from '../../../public/assets/icons/edit-green.svg'
import CustomTextArea from '../../components/form/text-area'
import BorderedListItem from '../../components/bordered-list-item'

type JobResponsibilitiesFormProps = {
  data: JobResponsibilitiesObject
  onChange: (e) => void
  onDelete: (res: string) => void
}

const JobResponsibilitiesForm = ({ data, onChange, onDelete }: JobResponsibilitiesFormProps) => {
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

  return (
    <>
      <Box maxHeight='500px' overflowY='auto'>
        {data.responsibilities?.map((responsibility, index) => {
          return <BorderedListItem text={responsibility} onDelete={handleDelete} onEdit={handleEdit} number={index + 1} />
        })}
      </Box>
      <CustomTextArea value={fieldValue} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  )
}

export default JobResponsibilitiesForm


