import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../theme/theme'
import Layout from '../components/layouts'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Layout>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  )

}

export default MyApp
