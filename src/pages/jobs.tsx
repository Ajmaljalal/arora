import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Body from '../containers/layouts/body/body-content'
import BodyLayout from '../containers/layouts/body/body-layout'

type Props = {}

const Jobs = (props: Props) => {
  return (
    <Box>
      <Head>
        <title>Jobs</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <Body>
        </Body>
      </BodyLayout>
    </Box>
  )
}

export default Jobs