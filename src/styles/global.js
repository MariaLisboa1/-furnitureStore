import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto Mono', monospace;
  }
`