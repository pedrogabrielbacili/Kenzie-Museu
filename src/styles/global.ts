import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
  }

  h1{
    font-size: 1.875rem;
  }

  button{
    cursor: pointer;
  }

  dialog{
    display: unset;
    position: unset;
  }
`;
