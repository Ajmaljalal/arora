import React, { ReactElement } from 'react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import BodyLayout from '../../components/layouts/body/body-layout'
import PageContentWrapper from '../../components/layouts/page-content-wrapper'
import JobDetailsHeader from '../../containers/jobs/job/job-header'
import { useRouter } from 'next/router'
import { jobs } from '../../data'
import JobDetailsBody from '../../containers/jobs/job/job-body'
import Layout from '../../components/layouts'

type Props = {}

const JobDetails = (props: Props) => {
  const router = useRouter()
  const jobId = router.query?.id
  const job = jobs.find(job => job?.id === jobId)
  return (
    <Box>
      <Head>
        <title>Job Details</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <JobDetailsHeader job={job} />
        <PageContentWrapper>
          <JobDetailsBody job={job} />
        </PageContentWrapper>
      </BodyLayout>
    </Box>
  )
}

JobDetails.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default JobDetails