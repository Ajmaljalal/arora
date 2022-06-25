import React from 'react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import BodyLayout from '../../components/layouts/body/body-layout'
import PageContentWrapper from '../../components/layouts/page-content-wrapper'

type Props = {}

const JobDetails = (props: Props) => {
  return (
    <Box>
      <Head>
        <title>Jobs</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <PageContentWrapper>
          here I am
        </PageContentWrapper>
      </BodyLayout>
    </Box>
  )
}
export default JobDetails