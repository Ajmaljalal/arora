import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'

type DatePickerProps = {
  onChange: () => void
  isRequired?: boolean
  label?: string
  isInvalid?: boolean
  errorMessage?: string
  helperText?: string
  width?: string
}

const DatePicker = ({ onChange, isRequired = false, label, isInvalid, errorMessage, helperText, width }: DatePickerProps) => {
  return (
    <FormControl mt='15px' width={width} isRequired={isRequired} isInvalid={isInvalid}>
      <FormLabel htmlFor={label.toLowerCase()} fontSize='16px' fontWeight='600'>{label}</FormLabel>
      <input
        type='date'
        id={label.toLowerCase()}
        onChange={onChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        style={{
          border: '1px solid #ACBAD1',
          padding: '5px 16px',
          borderRadius: '4px',
          color: '#ACBAD1'
        }}
      />
      <FormErrorMessage >{errorMessage}</FormErrorMessage>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default DatePicker

