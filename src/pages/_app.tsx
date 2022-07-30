import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../theme/theme'
import Layout from '../components/layouts'
import Head from 'next/head'
import '../aws-services/config'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <CSSReset />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </Provider>
  )

}

export default MyApp
