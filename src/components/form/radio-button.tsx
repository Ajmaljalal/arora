import { Radio } from '@chakra-ui/react'
import React from 'react'

type Props = {
  value: string
  text: string
  currentValue: string
}

const RadioButton = ({ value, text, currentValue }: Props) => {
  return (
    <Radio
      value={value}
      fontSize='14px'
      fontWeight='400'
      _after={{
        content: '""',
        border: '1px solid',
        borderColor: value === currentValue ? 'brand.secondary' : 'brand.grey300',
        padding: '9px',
        background: 'transparent',
        borderRadius: '50%'
      }}
      _checked={{
        bg: 'brand.secondary',
        border: '1px solid',
        shadow: 'none'
      }}
      _focus={{
        bg: 'brand.secondary',
        border: '1px solid',
        shadow: 'none'
      }}
    >
      {text}
    </Radio>
  )
}


export default RadioButton