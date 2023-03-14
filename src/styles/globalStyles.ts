import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #17191E;
    color: #fff;

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