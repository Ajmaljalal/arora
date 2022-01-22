// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      primary: 'rgb(26, 30, 39)',
      secondary: '#ECF5F5',
      white: '#FFFFFF',
      yellow: 'rgb(249, 218, 88)',
    }
  }
})

export default theme