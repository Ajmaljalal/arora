import React, { useState } from 'react';
import {
  Flex,
  Box,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BaseButton } from '../../components/buttons/button';
import InputField from '../../components/form/input';
import PasswordInput from '../../components/form/password-input';
import { signIn } from '../../aws-services/auth';

type Props = {}

const LoginForm = ({ }: Props) => {
  const [isSignin, setIsSigning] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormDate] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFormDate({ ...formData, [name]: value })
  }

  const handleSubmit = async () => {
    setIsSigning(true)
    console.log('here')
    try {
      await signIn({
        username: formData.email,
        password: formData.password,
      })
      setFormDate({
        email: '',
        password: ''
      })
    } catch (error) {
      setError(error)
    }
    setIsSigning(false)
  }


  const renderEmailPassword = () => {
    return (
      <>
        <InputField
          label='Email Address'
          value={formData.email}
          name='email'
          type='email'
          onChange={handleChange}
          isRequired
        />
        <PasswordInput name='password' value={formData.password} onChange={handleChange} />
      </>
    )
  }

  const renderButtons = () => {
    const isActive = formData.email && formData.password
    return (
      <>
        <BaseButton
          text='Login'
          isLoading={isSignin}
          bg={'brand.primary'}
          color={'brand.white'}
          isDisabled={!isActive}
          onClick={handleSubmit}
        />
        <Text align={'center'} >
          Don't have an account? <Link href='/register' passHref><a><BaseButton color='brand.primary' text='Register' /></a></Link>
        </Text>
      </>
    )
  }

  return (
    <Flex
      justify={'center'}
      width='100%'
      height='100%'
      maxHeight='calc(100vh - 10px)'
      overflowY='auto'
      mt='32px'
    >
      <Box
        rounded={'4px'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
        height='fit-content'
        maxWidth='400px'
        width='100%'
        minWidth='300px'
      >
        <Stack spacing={4}>
          {renderEmailPassword()}
          {renderButtons()}
        </Stack>
      </Box>
    </Flex >
  )
}

export default LoginForm
