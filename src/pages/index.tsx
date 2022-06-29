import { Box, Grid, GridItem, useMediaQuery, } from '@chakra-ui/react'
import Head from 'next/head'
import PageTitle from '../components/headings/page-title'
import PageContentWrapper from '../components/layouts/page-content-wrapper'
import JobStatusCardsList from '../containers/dashboard/jobs-status-cards-list'
import ProfileStatus from '../containers/dashboard/profile-status'
import TodaysInterviews from '../containers/dashboard/today-interviews'
import BodyLayout from '../components/layouts/body/body-layout'
import NewApplications from '../containers/dashboard/new-applications'


export default function Home() {
  const [isSmallScreen] = useMediaQuery('(max-width: 1100px)')
  const gridColumn = isSmallScreen ? '1' : '2'
  return (
    <Box>
      <Head>
        <title>Arora | Dashboard</title>
        <meta name="description" content="A dashboard of all your activities recruitement activities in arora" />
      </Head>
      <BodyLayout>
        <Box>
          <PageTitle text='Dashboard' />
        </Box>
        <PageContentWrapper>
          <JobStatusCardsList />
          <Grid
            templateColumns={`repeat(${gridColumn}, 1fr)`}
            gap={2}
            mt='16px'
            autoFlow='row'
            maxHeight='85%'
            overflowY='auto'
          >
            <GridItem>
              <TodaysInterviews />
            </GridItem>
            <GridItem>
              <ProfileStatus />
            </GridItem>
            <GridItem>
              <NewApplications />
            </GridItem>
          </Grid>
        </PageContentWrapper>
      </BodyLayout>
    </Box>
  )
}
