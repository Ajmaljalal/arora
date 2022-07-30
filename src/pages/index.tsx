import { Box, Grid, GridItem, useMediaQuery, } from '@chakra-ui/react'
import Head from 'next/head'
import PageTitle from '../components/headings/page-title'
import PageContentWrapper from '../components/layouts/page-content-wrapper'
import JobStatusCardsList from '../containers/dashboard/jobs-status-cards-list'
import ProfileStatus from '../containers/dashboard/profile-status'
import TodaysInterviews from '../containers/dashboard/today-interviews'
import BodyLayout from '../components/layouts/body/body-layout'
import NewApplications from '../containers/dashboard/new-applications'
import { ReactElement } from 'react'
import Layout from '../components/layouts'


const Home = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 1100px)')
  const gridColumn = isSmallScreen ? '1' : '2'
  return (
    <Box>
      <Head>
        <title>Arora | Dashboard</title>
        <meta name="description" content="A dashboard of all your recruitement/hiring/job seeking activities in Assistian" />
      </Head>
      <BodyLayout>
        <PageTitle text='Dashboard' />
        <PageContentWrapper>
          <JobStatusCardsList />
          {/* <TodaysInterviews /> */}
          <Grid
            templateColumns={`repeat(${gridColumn}, 1fr)`}
            gap={2}
            mt='16px'
            pb='20px'
            autoFlow='row'
            maxHeight='calc(100vh - 233px)'
            overflowY='auto'
          >
            <GridItem h='fit-content'>
              <ProfileStatus />
            </GridItem>
            <GridItem h='fit-content'>
              <NewApplications />
            </GridItem>
          </Grid>
        </PageContentWrapper>
      </BodyLayout>
    </Box>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    // <Layout>
    page
    // </Layout>
  )
}

export default Home