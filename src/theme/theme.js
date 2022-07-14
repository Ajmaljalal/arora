// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "light"
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
    div: "'Roboto', sans-serif"

  },
  colors: {
    brand: {
      primary: '#4169E0',
      primaryLight: '#ECF0FC',
      secondary: '#49C496',
      secondaryLight: '#A6E7CE',
      containerBackground: '#F3F6F9',
      white: '#FFFFFF',
      black: '#060A16',
      red: '#EA4335',
      yellow: '#FFD831',
      lightYellow: '#FFF7D6',
      orange: '#FF7B31',
      lightOrange: '#FFF4ED',
      darkGreen: '#136446',
      grey500: '#77849E',
      grey400: '#60728F',
      grey300: '#ACBAD1',
      grey200: '#ECF0FC',
      grey100: '#F3F6F9',
      grey50: '#CDCED0',
    }
  },
  styles: {
    global: {
      '*': {
        boxSizing: 'border-box'
      },
      body: {
        letterSpacing: '0.02em',
        boxSizing: 'border-box'
      },
      div: {
        letterSpacing: '0.02em',
        boxSizing: 'border-box'
      },
      button: {
        letterSpacing: '0.02em',
        boxSizing: 'border-box'
      },
      h1: {
        letterSpacing: '0.03em',
        boxSizing: 'border-box'
      },
      h2: {
        letterSpacing: '0.03em',
        boxSizing: 'border-box'
      }
    }
  }
})

export default theme