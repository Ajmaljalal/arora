import { FormControl, FormLabel, Input, InputGroup, InputLeftElement, InputProps } from '@chakra-ui/react'
import React from 'react'

type InputFieldProps = {
  label: string
  value: string | number
  leftAddOn?: string | JSX.Element
  isRequired?: boolean
} & InputProps

const InputField = ({
  label,
  leftAddOn = null,
  value,
  isRequired,
  ...props
}: InputFieldProps) => {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor={label?.toLowerCase()} fontSize='16px' fontWeight='600'>{label}</FormLabel>
      <InputGroup>
        {
          leftAddOn && <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
          >{leftAddOn}</InputLeftElement>
        }

        <Input
          id={label?.toLowerCase()}
          value={value}
          border='1px solid'
          borderColor='brand.grey200'
          borderRadius='4px'
          _hover={{
            borderColor: 'brand.grey300',
            color: 'brand.grey400'
          }}
          _focus={{
            borderColor: 'brand.secondary',
            color: 'brand.black'
          }}
          _placeholder={{ color: 'brand.grey300' }}
          {...props}
        />
      </InputGroup>
    </FormControl>
  )
}

export default InputField

