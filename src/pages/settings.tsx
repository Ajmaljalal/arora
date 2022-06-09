import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Body from '../containers/body'
import BodyLayout from '../containers/layouts/body-layout'

type Props = {}

const Settings = (props: Props) => {
  return (
    <Box>
      <Head>
        <title>Arora</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <Body>
          <h1>This is a text</h1>
        </Body>
      </BodyLayout>
    </Box>
  )
}

export default Settings