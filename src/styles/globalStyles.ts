'use client'
import { createGlobalStyle } from 'styled-components'

import { colors } from '@/utils/baseStyles'

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    color: ${colors.primary.text};
    box-sizing: border-box;

    background-color: #000000;
    /* background: linear-gradient(180deg,hsla(0,0%,100%,.1) 0,hsla(0,0%,100%,0) 50%,hsla(0,0%,100%,0) 100%), #000; */

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