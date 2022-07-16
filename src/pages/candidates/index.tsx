import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Layout from '../../components/layouts'
import BodyContent from '../../components/layouts/body/body-content'
import BodyLayout from '../../components/layouts/body/body-layout'
import PageContentWrapper from '../../components/layouts/page-content-wrapper'
import Candidates from '../../containers/candidates'
import CandidatesHeader from '../../containers/candidates/candidates-header'

type Props = {}

const CandidatesPage = (props: Props) => {
  return (
    <Box>
      <Head>
        <title>Candidates</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <CandidatesHeader />
        <PageContentWrapper>
          <Candidates />
        </PageContentWrapper>
      </BodyLayout>
    </Box>
  )
}

CandidatesPage.getLayout = function getLayout(page: ReactElement) {
  return (
    // <Layout>
    page
    // </Layout>
  )
}

export default CandidatesPage