import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: "Indie Flower", cursive;
    color: white;
    font-size: 24px;
  }
  
  body {
    margin: 0;
  }
`;
