import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import BodyLayout from '../../components/layouts/body/body-layout'
import PageContentWrapper from '../../components/layouts/page-content-wrapper'
import CandidatesHeader from '../../containers/candidates-list/candidates-header'
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
          <RegisterationForm />
        </PageContentWrapper>
      </BodyLayout>
    </Box>
  )
}

export default Register