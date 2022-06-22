import React from 'react'
import { Kbd, Textarea } from "@chakra-ui/react"
import { ChangeEvent } from "react"

type CustomTextAreaProps = {
  value: string
  placeholderText: string
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit?: (e: any) => void
}

const CustomTextArea = ({ value, placeholderText, handleChange, handleSubmit }: CustomTextAreaProps) => {
  return (
    <Textarea
      value={value}
      onChange={handleChange}
      onKeyDown={handleSubmit}
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