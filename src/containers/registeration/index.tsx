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

const RegisterationForm = ({ }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const renderNameFields = () => {
    return (
      <Box>
        <Box>
          <InputField
            label='First Name'
            value=''
            type='text'
            onChange={() => console.log('')}
          />
        </Box>
        <Box>
          <InputField
            label='Last Name'
            value=''
            type='text'
            onChange={() => console.log('')}
          />
        </Box>
      </Box>
    )
  }

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
          text='Register'
          isLoading={false}
          bg={'brand.primary'}
          color={'brand.white'}
        />
        <Text align={'center'} >
          Already registered? <Link href='/login' passHref><a><BaseButton color='brand.primary' text='Login' /></a></Link>
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
            Register with Assistian
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
            {renderNameFields()}
            {renderEmailPassword()}
            {renderButtons()}
          </Stack>
        </Box>
      </Stack >
    </Flex >
  )
}

export default RegisterationForm
