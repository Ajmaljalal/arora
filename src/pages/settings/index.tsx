import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import Layout from '../../components/layouts'
import BodyContent from '../../components/layouts/body/body-content'
import BodyLayout from '../../components/layouts/body/body-layout'

type Props = {}

const Settings = (props: Props) => {
  return (
    <Box>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Best videos of all kinds" />
      </Head>
      <BodyLayout>
        <BodyContent>
        </BodyContent>
      </BodyLayout>
    </Box>
  )
}

Settings.getLayout = function getLayout(page: ReactElement) {
  return (
    // <Layout>
    page
    // {/* </Layout> */}
  )
}

export default Settings