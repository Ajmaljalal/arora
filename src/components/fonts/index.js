import { Global } from "@emotion/react"
export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'silka-bold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../../../public/assets/fonts/Silka-Bold.otf') format('otf');
        // unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }

      @font-face {
        font-family: 'silka-medium';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('../../../public/assets/fonts/Silka-Medium.otf') format('otf');
        // unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: 'silka';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../../../public/assets/fonts/Silka-Light.otf') format('otf');
        // unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      `}
  />
)