import React, { ReactElement } from 'react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import BodyLayout from '../../components/layouts/body/body-layout'
import PageContentWrapper from '../../components/layouts/page-content-wrapper'
import JobsHeader from '../../containers/jobs/jobs-header'
import JobsList from '../../containers/jobs/jobs-list/jobs-list'
import Layout from '../../components/layouts'

type Props = {}

const Jobs = (props: Props) => {
  return (
    <Box>
      <Head>
        <title>Jobs</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <JobsHeader />
        <PageContentWrapper>
          <JobsList />
        </PageContentWrapper>
      </BodyLayout>
    </Box>
  )
}


Jobs.getLayout = function getLayout(page: ReactElement) {
  return (
    // <Layout>
    page
    // </Layout>
  )
}
export default Jobs