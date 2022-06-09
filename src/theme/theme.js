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
      red: '#EA4335',
      yellow: '#FFD831',
      orang: '#FF7B31',
      grey500: '#77849E',
      grey400: '#60728F',
      grey300: '#ACBAD1',
      grey200: '#ECF0FC',
      grey100: '#F3F6F9',
      grey50: '#CDCED0',
    }
  }
})

export default theme