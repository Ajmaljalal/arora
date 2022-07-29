import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Wrap,
} from '@chakra-ui/react';
import Link from 'next/link';
import { BaseButton } from '../../components/buttons/button';
import InputField from '../../components/form/input';
import PasswordInput from '../../components/form/password-input';

type Props = {}

const LoginForm = ({ }: Props) => {


  const renderEmailPassword = () => {
    return (
      <>
        <InputField
          label='Email Address'
          value=''
          type='email'
          onChange={() => console.log('')}
        />
        <PasswordInput onChange={(e) => console.log(e.target.value)} />
      </>
    )
  }

  const renderButtons = () => {
    return (
      <>
        <BaseButton
          text='Login'
          isLoading={true}
          bg={'brand.primary'}
          color={'brand.white'}
          isDisabled={true}
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
      minW='360px'
      height='100%'
      maxHeight='calc(100vh - 10px)'
      overflowY='auto'
      mt='32px'
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} minW='360px' py={12} width='50%'>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login to Assistian
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of the cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'4px'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {renderEmailPassword()}
            {renderButtons()}
          </Stack>
        </Box>
      </Stack >
    </Flex >
  )
}

export default LoginForm
