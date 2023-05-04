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
    
  :root{
    --toastify-color-success:  #ae8b63;
    --toastify-color-error: #e74c3c;

    --primary-color: #ae8b63;

    --font-30: 1.875rem;
    --font-26: 1.625rem;
    --font-22: 1.375rem;
    --font-20: 1.25rem;

    --weight-500: 500;

  }

  body{
    height: 100vh;
    background: rgb(79, 79, 79);
  }
  .container{
      max-width:1200px;
      width: 90%;
      margin: 0 auto;
    }

  h1{
    font-size: 1.875rem;
  }
  .flex{
    display: flex;
  }
  .flex-row{
    flex-direction: row;
  }
  .align-center{
    align-items: center;
  }

  .flex-between{
    justify-content: space-between;
  }

  button{
    cursor: pointer;
  }
  
  dialog{
    display: unset;
    position: unset;
  }

`;
