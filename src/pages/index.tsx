import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import PageTitle from '../components/headings/page-title'
import Body from '../containers/body'
import BodyLayout from '../containers/layouts/body-layout'


export default function Home() {
  return (
    <Box>
      <Head>
        <title>Arora</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <Body>
          <PageTitle text='Dashboard' />
        </Body>
      </BodyLayout>
    </Box>
  )
}
