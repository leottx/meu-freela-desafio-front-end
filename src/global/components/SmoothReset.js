import { createGlobalStyle } from 'styled-components';

const SmoothReset = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Roboto';
    font-weight: 400;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
  }
`;

export default SmoothReset;
