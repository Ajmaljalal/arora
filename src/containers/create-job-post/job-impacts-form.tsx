import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import BorderedListItem from '../../components/bordered-list-item'
import CustomTextArea from '../../components/form/text-area'
import { JobImpactsObject } from './utils/objects'
import FormWrapper from '../../components/form/form-wrapper'


type JobImpactsFormProps = {
  data: JobImpactsObject
  onChange: (data: JobImpactsObject) => void
}
const JobImpactsForm = ({ data, onChange }: JobImpactsFormProps) => {
  const [firstMonthValue, setFirstMonthValue] = useState('')
  const [threeMonthsValue, setThreeMonthsValue] = useState('')
  const [oneYearValue, setOneYearValue] = useState('')
  const [jobImpacts, setjobImpacts] = useState({ firstMonth: '', threeMonths: '', oneYear: '', isComplete: false })

  useEffect(() => {
    setjobImpacts(data)
  }, [data])

  const handleJobImpactsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
    const name: string = e.target.name
    const formDataTemp = { ...jobImpacts, [name]: value }
    onChange(formDataTemp)
  }

  const handleTextAreValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const name = e.target.name
    const value = e.target.value
    if (name === 'firstMonth') {
      setFirstMonthValue(value)
    } else if (name === 'threeMonths') {
      setThreeMonthsValue(value)
    } else if (name === 'oneYear') {
      setOneYearValue(value)
    }
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && e.target.value.trim().length) {
      e.preventDefault()
      handleJobImpactsChange(e)
      setFirstMonthValue('')
      setThreeMonthsValue('')
      setOneYearValue('')
    }
  }

  const handleDelete = (impactToDelete: string) => {
    const formDataTemp = { ...jobImpacts, [impactToDelete]: '' }
    onChange(formDataTemp)
  }

  const handleEdit = (text: string, name: string) => {
    if (name === 'firstMonth') {
      setFirstMonthValue(text)
      handleDelete('firstMonth')
    } else if (name === 'threeMonths') {
      setThreeMonthsValue(text)
      handleDelete('threeMonths')
    } else {
      setOneYearValue(text)
      handleDelete('oneYear')
    }
  }

  return (
    <FormWrapper>
      <Box mb='15px'>
        <Text mb='5px' color='brand.grey500' fontWeight='700'>In the first month</Text>
        {data.firstMonth &&
          <BorderedListItem text={data.firstMonth} onDelete={(_) => handleDelete('firstMonth')} onEdit={(text) => handleEdit(text, 'firstMonth')} />}
        {!data.firstMonth &&
          <CustomTextArea
            value={firstMonthValue}
            name='firstMonth'
            handleChange={handleTextAreValueChange}
            handleSubmit={handleSubmit}
            placeholderText='first month impact'
          />
        }
      </Box>
      <Box mb='15px'>
        <Text mb='5px' color='brand.grey500' fontWeight='700'>In three months</Text>
        {data.threeMonths &&
          <BorderedListItem text={data.threeMonths} onDelete={(_) => handleDelete('threeMonths')} onEdit={(text) => handleEdit(text, 'threeMonths')} />}
        {!data.threeMonths &&
          <CustomTextArea
            value={threeMonthsValue}
            name='threeMonths'
            handleChange={handleTextAreValueChange}
            handleSubmit={handleSubmit}
            placeholderText='three months impact'
          />
        }
      </Box>
      <Box mb='15px'>
        <Text mb='5px' color='brand.grey500' fontWeight='700'>In a year</Text>
        {data.oneYear &&
          <BorderedListItem text={data.oneYear} onDelete={(_) => handleDelete('oneYear')} onEdit={(text) => handleEdit(text, 'oneYear')} />}
        {!data.oneYear &&
          <CustomTextArea
            value={oneYearValue}
            name='oneYear'
            handleChange={handleTextAreValueChange}
            handleSubmit={handleSubmit}
            placeholderText='one year impact'
          />
        }
      </Box>
    </FormWrapper>
  )
}

export default JobImpactsForm