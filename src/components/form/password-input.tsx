import React, { useState } from 'react'
import { FormControl, FormLabel, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react'
import { BaseButton } from '../buttons/button'

type PasswordInputProps = {

} & InputProps

const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input type={showPassword ? 'text' : 'password'} {...props} />
        <InputRightElement h={'full'} mr='10px'>
          <BaseButton
            text={showPassword ? 'hide' : 'show'}
            color='brand.primary'
            onClick={() => setShowPassword((showPassword) => !showPassword)}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}

export default PasswordInput