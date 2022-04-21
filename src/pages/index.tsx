import { Box, Grid, GridItem, } from '@chakra-ui/react'
import Head from 'next/head'
import PageTitle from '../components/headings/page-title'
import PageContentWrapper from '../components/layouts/page-content-wrapper'
import BodyContent from '../containers/body'
import JobStatusCardsList from '../containers/dashboard/jobs-status-cards-list'
import ProfileStatus from '../containers/dashboard/profile-status'
import TodaysInterviews from '../containers/dashboard/today-interviews'
import Body from '../containers/layouts/body-layout'


export default function Home() {
  return (
    <Box>
      <Head>
        <title>Arora</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <Body>
        <BodyContent>
          <PageTitle text='Dashboard' />
          <PageContentWrapper>
            <JobStatusCardsList />
            <Grid templateColumns='repeat(2, 1fr)' gap={8} mt='16px' autoFlow='row'>
              <GridItem>
                <ProfileStatus />
              </GridItem>
              <GridItem>
                <TodaysInterviews />
              </GridItem>
            </Grid>
          </PageContentWrapper>
        </BodyContent>
      </Body>
    </Box>
  )
}
