import React from 'react'
import { Textarea } from "@chakra-ui/react"
import { ChangeEvent } from "react"

type CustomTextAreaProps = {
  value: string
  name?: string
  placeholderText: string
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit?: (e?: any) => void
}

const CustomTextArea = ({ value, name, placeholderText, handleChange, handleSubmit }: CustomTextAreaProps) => {

  const handleFormSubmit = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && e.target.value.trim().length) {
      e.preventDefault()
      handleSubmit(e)
    }
  }
  return (
    <Textarea
      value={value}
      name={name}
      onChange={handleChange}
      onKeyDown={handleFormSubmit}
      placeholder={`Type a ${placeholderText} and hit ENTER ⏎ to save!`}
      border='1px solid'
      borderColor='brand.grey200'
      borderRadius='4px'
      mb='8px'
      overflow='hidden'
      _focus={{ boxShadow: 'none', border: '1px solid', borderColor: 'brand.secondary' }}
      _hover={{ border: '1px solid', borderColor: 'brand.grey200' }}
      _placeholder={{ color: 'brand.grey300' }}
    />
  )
}

export default CustomTextArea