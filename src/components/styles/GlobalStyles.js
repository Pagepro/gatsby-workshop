import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;
    --purple: rebeccapurple;
    --grey: #bbb;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: var(--black);
    background: var(--white);
    box-sizing: border-box;
  }

  body {
    line-height: 1.5;
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
    padding-left: 0;
  }

  h1 {
    margin: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 18px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* Additional resets */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Fix antialiasing */
  *,
  *:before,
  *:after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle