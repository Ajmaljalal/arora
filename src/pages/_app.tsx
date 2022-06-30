import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../theme/theme'
import Layout from '../components/layouts'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={theme}>
        <CSSReset />
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  )

}

export default MyApp
