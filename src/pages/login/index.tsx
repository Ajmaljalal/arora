import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import BodyLayout from '../../components/layouts/body/body-layout'
import PageContentWrapper from '../../components/layouts/page-content-wrapper'
import CandidatesHeader from '../../containers/candidates-list/candidates-header'
import LoginForm from '../../containers/login'
import RegisterationForm from '../../containers/registeration'

type Props = {}

const Login = (props: Props) => {
  return (
    <Box>
      <Head>
        <title>Login | Assistian</title>
        <meta name="description" content="Login to Assistian to find jobs/applicants." />
      </Head>
      <BodyLayout>
        <PageContentWrapper>
          <LoginForm />
        </PageContentWrapper>
      </BodyLayout>
    </Box>
  )
}

export default Login