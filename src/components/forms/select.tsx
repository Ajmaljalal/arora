import { FormControl, Select, FormHelperText, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'

type SelectFieldProps = {
  onChange: (e) => void
  value: string | number
  options: string[]
  isRequired?: boolean
  label?: string
  isInvalid?: boolean
  errorMessage?: string
  helperText?: string
  width?: string
}

const SelectField = ({
  onChange,
  isRequired = false,
  label,
  isInvalid,
  errorMessage,
  helperText,
  width,
  value,
  options
}: SelectFieldProps) => {
  return (
    <FormControl mt='15px' width={width} isRequired={isRequired} isInvalid={isInvalid}>
      <FormLabel htmlFor={label.toLowerCase()} fontSize='16px' fontWeight='600'>{label}</FormLabel>
      <Select
        id={label.toLowerCase()}
        name={label}
        onChange={onChange}
        value={value}
        placeholder={`Enter ${label.toLowerCase()}`}
        border='1px solid'
        borderColor='brand.grey300'
        borderRadius='4px'
        color='brand.grey400'
        colorScheme='green'
        _hover={{
          borderColor: 'brand.grey300',
          color: 'brand.grey400'
        }}
        _focus={{
          borderColor: 'brand.secondary',
          color: 'brand.black'
        }}
        _placeholder={{ color: 'brand.grey300' }}
        _invalid={{ boxShadow: 'none', borderColor: 'brand.red' }}
      >
        {
          options.map(option => {
            return (
              <option key={option} value={option}>{option}</option>
            )
          })
        }
      </Select>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default SelectField
