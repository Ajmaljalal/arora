import React, { useState } from 'react';
import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BaseButton } from '../../components/buttons/button';
import InputField from '../../components/form/input';
import PasswordInput from '../../components/form/password-input';
import { signUp, confirmSignUp } from '../../aws-services/auth';
import InlineAlert from '../../components/alerts/inline-alert';

type RegisterationFormProps = {}

const RegisterationForm = ({ }: RegisterationFormProps) => {
  const [isSignin, setIsSigning] = useState(false)
  const [inVerificationScreen, setVerificationScreen] = useState(false)
  const [error, setError] = useState(null)
  const [verificationCode, setVerificationCode] = useState('')
  const [formData, setFormDate] = useState({
    name: '',
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
    try {
      await signUp({
        username: formData.email,
        password: formData.password,
        name: formData.name
      })
      setVerificationScreen(true)
    } catch (error) {
      setError(error)
    }
    setIsSigning(false)
  }

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value)
  }

  const submitVerificationCode = async () => {
    setIsSigning(true)
    try {
      await confirmSignUp({ username: formData.email, code: verificationCode })
      setVerificationCode('')
    } catch (error) {
      setError(error)
    }
    setIsSigning(false)
  }

  const renderNameField = () => {
    return (
      <InputField
        name='name'
        label='Full Name'
        value={formData.name}
        type='text'
        onChange={handleChange}
        isRequired
      />

    )
  }

  const renderEmailPassword = () => {
    return (
      <>
        <InputField
          name='email'
          label='Email Address'
          value={formData.email}
          type='email'
          onChange={handleChange}
          isRequired
        />
        <PasswordInput name='password' value={formData.password} onChange={handleChange} />
      </>
    )
  }

  const renderButtons = () => {
    const isActive = formData.name && formData.email && formData.password
    return (
      <>
        <BaseButton
          text='Register'
          isLoading={isSignin}
          isDisabled={!isActive}
          bg={'brand.primary'}
          color={'brand.white'}
          onClick={handleSubmit}
        />
        <Text align={'center'} >
          Already registered? <Link href='/login' passHref><a><BaseButton color='brand.primary' text='Login' /></a></Link>
        </Text>
      </>
    )
  }

  const renderVerifyCodeButton = () => {
    return (
      <BaseButton
        text='Verify'
        isLoading={isSignin}
        isDisabled={!verificationCode.length}
        bg={'brand.primary'}
        color={'brand.white'}
        onClick={submitVerificationCode}
      />
    )
  }

  const reunderSignUpForm = () => {
    return (
      <Stack spacing={4}>
        {renderNameField()}
        {renderEmailPassword()}
        {renderButtons()}
      </Stack>
    )
  }

  const renderConfirmSignUp = () => {
    return (
      <Stack spacing={4}>
        <Text>Please enter the code you recieved in your email!</Text>
        <InputField
          name='code'
          label='Verification code'
          value={verificationCode}
          type='text'
          onChange={handleVerificationCodeChange}
          isRequired
        />
        {renderVerifyCodeButton()}
      </Stack>
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
        {error && <InlineAlert message={error} status='error' title='' />}
        {inVerificationScreen ? renderConfirmSignUp() : reunderSignUpForm()}
      </Box>
    </Flex >
  )
}

export default RegisterationForm
