import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/theme'
import Layout from '../containers/layouts'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  )

}

export default MyApp
