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
        <title>Settings</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <Body>
        </Body>
      </BodyLayout>
    </Box>
  )
}

export default Settings