import { createGlobalStyle } from 'styled-components'

import { colors } from '@/utils/baseStyles'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.primary.background};
    color: ${colors.primary.text};
    box-sizing: border-box;

    background-image: url('/assets/noise.webp');
    background-repeat: repeat;
    background-color: ${colors.primary.background};
    background-blend-mode: overlay;

    overflow-x: hidden;

    button, input {
      font-family: inherit;
    }

    a {
      text-decoration: none;
    }
  }
`

export default GlobalStyle