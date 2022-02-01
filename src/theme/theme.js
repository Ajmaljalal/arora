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
      primary: '#4169E0',
      primaryLight: 'rgba(229, 236, 255, 1)',
      secondary: '#49C496',
      containerBackground: '#F3F6F9',
      white: '#FFFFFF',
      black: '#060A16',
      grey: '#60728F',
      greyDisabled: '#CDCED0',
      red: '#EA4335'
    }
  }
})

export default theme