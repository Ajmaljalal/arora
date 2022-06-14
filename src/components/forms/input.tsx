import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, InputGroup, InputLeftAddon, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

type InputFieldProps = {
  onChange: (e) => void
  value: string | number
  isRequired?: boolean
  label?: string
  isInvalid?: boolean
  errorMessage?: string
  helperText?: string
  width?: string
  type?: string
  leftAddOn?: string | null
}

const InputField = ({
  onChange,
  isRequired = false,
  label,
  isInvalid,
  errorMessage,
  helperText,
  width,
  type,
  leftAddOn = null,
  value
}: InputFieldProps) => {
  return (
    <FormControl mt='15px' width={width} isRequired={isRequired} isInvalid={isInvalid}>
      <FormLabel htmlFor={label.toLowerCase()} fontSize='16px' fontWeight='600'>{label}</FormLabel>
      <InputGroup>
        {
          leftAddOn ? <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
          >{leftAddOn}</InputLeftElement> : null
        }

        <Input
          type={type}
          id={label.toLowerCase()}
          value={value}
          onChange={onChange}
          placeholder={`Enter ${label.toLowerCase()}`}
          name={label}
          border='1px solid'
          borderColor='brand.grey300'
          borderRadius='4px'
          color='brand.grey400'
          _hover={{
            borderColor: 'brand.grey300',
            color: 'brand.grey400'
          }}
          _focus={{
            borderColor: 'brand.secondary',
            color: 'brand.black'
          }}
          _placeholder={{ color: 'brand.grey400' }}
          _invalid={{ boxShadow: 'none', borderColor: 'brand.red' }}
        />
      </InputGroup>
      <FormErrorMessage >{errorMessage}</FormErrorMessage>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  )
}

export default InputField

