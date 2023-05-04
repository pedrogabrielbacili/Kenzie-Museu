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

  .container{
        max-width:1200px;
        width: 90%;
        margin: 0 auto;
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
  :root{
    --toastify-color-success:  #ae8b63;
    --toastify-color-error: #e74c3c;
  }
`;
