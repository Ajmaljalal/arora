import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, HStack, Text } from '@chakra-ui/react'
import { JobRequirementsObject } from './utils/objects'
import TrashIcon from '../../../public/assets/icons/trash-empty.svg'
import EditIcon from '../../../public/assets/icons/edit.svg'
import CustomTextArea from '../../components/form/text-area'

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
      <Box maxHeight='500px' overflowY='auto'>
        {data.requirements?.map(responsibility => {
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
                <EditIcon onClick={() => handleEdit(responsibility)} />
                <TrashIcon onClick={() => handleDelete(responsibility)} />
              </HStack>
            </HStack>
          )
        })}
      </Box>
      <CustomTextArea value={fieldValue} handleChange={handleTextAreValueChange} handleSubmit={handleSubmit} />
    </>
  )
}

export default JobRequirementsForm