import React, { ChangeEvent, useState } from 'react'
import { Box, HStack, Tag, TagCloseButton, TagLabel, Text, Wrap } from '@chakra-ui/react'
import { JobSkillsReqObject } from './utils/objects'
import TrashIcon from '../../../public/assets/icons/trash-empty.svg'
import CustomTextArea from '../../components/form/text-area'
import CustomTag from '../../components/tag'

type JobSkillsFormProps = {
  data: JobSkillsReqObject
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
        maxHeight='100px'
        overflowY='auto'
        borderRadius='4px'
        mb='8px'
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
      <Box maxHeight='500px' overflowY='auto'>
        {renderSkills()}
        <CustomTextArea value={fieldValue} handleChange={handleChange} handleSubmit={handleSubmit} />
        {/* {data.requirements?.map(responsibility => {
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
              <HStack>
                <TrashIcon onClick={() => handleEdit(responsibility)} />
                <TrashIcon onClick={() => handleDelete(responsibility)} />
              </HStack>
            </HStack>
          )
        })}
      <CustomTextArea value={fieldValue} handleChange={handleChange} handleSubmit={handleSubmit} /> */}
      </Box>
    </>
  )
}

export default JobSkillsForm