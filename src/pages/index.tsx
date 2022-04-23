import { Box, Grid, GridItem, useMediaQuery, } from '@chakra-ui/react'
import Head from 'next/head'
import PageTitle from '../components/headings/page-title'
import PageContentWrapper from '../components/layouts/page-content-wrapper'
import BodyContent from '../containers/layouts/body/body-content'
import JobStatusCardsList from '../containers/dashboard/jobs-status-cards-list'
import ProfileStatus from '../containers/dashboard/profile-status'
import TodaysInterviews from '../containers/dashboard/today-interviews'
import BodyLayout from '../containers/layouts/body/body-layout'


export default function Home() {
  const [isSmallScreen] = useMediaQuery('(max-width: 1100px)')
  const gridColumn = isSmallScreen ? '1' : '2'
  return (
    <Box>
      <Head>
        <title>Arora</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <BodyContent>
          <PageTitle text='Dashboard' />
          <PageContentWrapper>
            <JobStatusCardsList />
            <Grid templateColumns={`repeat(${gridColumn}, 1fr)`} gap={8} mt='16px' autoFlow='row'>
              <GridItem rowSpan={2}>
                <TodaysInterviews />
              </GridItem>
              <GridItem>
                <ProfileStatus />
              </GridItem>
            </Grid>
          </PageContentWrapper>
        </BodyContent>
      </BodyLayout>
    </Box>
  )
}
