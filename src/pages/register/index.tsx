import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import BodyLayout from '../../components/layouts/body/body-layout'
import PageContentWrapper from '../../components/layouts/page-content-wrapper'
import RegisterationForm from '../../containers/registeration'

type Props = {}

const Register = (props: Props) => {
  return (
    <Box>
      <Head>
        <title>Registration</title>
        <meta name="description" content="Register with Assistian to find jobs or applicants." />
      </Head>
      <BodyLayout>
        <PageContentWrapper>
          <Stack align={'center'} mt='20px'>
            <Heading fontSize={'2rem'} textAlign={'center'}>
              Register with Assistian
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'} textAlign='center'>
              to enjoy all of the cool features ✌️
            </Text>
          </Stack>
          <RegisterationForm />
        </PageContentWrapper>
      </BodyLayout>
    </Box>
  )
}

export default Register