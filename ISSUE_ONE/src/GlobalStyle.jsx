// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.colorBg};
    color: ${({ theme }) => theme.colors.colorMainFont};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default GlobalStyle;
