import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import BodyLayout from '../../../components/layouts/body/body-layout'
import PageContentWrapper from '../../../components/layouts/page-content-wrapper'
import ProfileDetailsBody from '../../../containers/company-profile/company-profile-body'
import CompanyProfileHeader from '../../../containers/company-profile/company-profile-header'
import { company } from '../../../data'

type Props = {}

const CompanyProfile = (props: Props) => {
  return (
    <Box>
      <Head>
        <title>CompanyProfile</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <CompanyProfileHeader company={company} />
        <PageContentWrapper>
          <ProfileDetailsBody company={company} />
        </PageContentWrapper>
      </BodyLayout>
    </Box>
  )
}

CompanyProfile.getLayout = function getLayout(page: ReactElement) {
  return (
    // <Layout>
    page
    // {/* </Layout> */}
  )
}

export default CompanyProfile