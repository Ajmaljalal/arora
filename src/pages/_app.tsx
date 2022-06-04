import { store } from '../store/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )

}

export default MyApp
