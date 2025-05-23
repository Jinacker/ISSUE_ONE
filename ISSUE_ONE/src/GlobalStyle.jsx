// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body {
    background-color: ${({ theme }) => theme.colors.colorBg};
    color: ${({ theme }) => theme.colors.colorMainFont};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  #root { 
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`; // transition으로 자연스럽게 바뀌게 구현

export default GlobalStyle;
