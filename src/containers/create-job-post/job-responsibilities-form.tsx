import React, { ChangeEvent, useState } from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import { JobResponsibilitiesObject } from './utils/objects'
import TrashIcon from '../../../public/assets/icons/trash-empty.svg'
import CustomTextArea from '../../components/form/text-area'

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
        {data.responsibilities?.map(responsibility => {
          return (
            <HStack
              key={responsibility}
              p='10px 16px'
              border='1px solid'
              borderColor='brand.grey300'
              borderRadius='4px'
              mb='8px'
              cursor='pointer'
              display='flex'
              justifyContent='space-between'
              alignItems='flex-start'
              spacing={3}
            >
              <Text flex={1} fontSize='14' fontWeight='400'>{responsibility}</Text>
              <TrashIcon onClick={() => handleEdit(responsibility)} />
              <TrashIcon onClick={() => handleDelete(responsibility)} />
            </HStack>
          )
        })}
      </Box>
      <CustomTextArea value={fieldValue} handleChange={handleChange} handleSubmit={handleSubmit} />
    </>
  )
}

export default JobResponsibilitiesForm


