import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import BodyContent from '../containers/layouts/body/body-content'
import BodyLayout from '../containers/layouts/body/body-layout'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <Box>
      <Head>
        <title>News</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <BodyContent>
        </BodyContent>
      </BodyLayout>
    </Box>
  )
}

export default Dashboard