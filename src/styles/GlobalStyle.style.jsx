import { createGlobalStyle } from "styled-components";
import "./font.css";

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  button {
    cursor: pointer;
  }
`;
