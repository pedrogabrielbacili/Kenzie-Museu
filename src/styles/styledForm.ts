import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 18px;

  border-radius: 8px;

  margin: 0 auto;
  max-width: 329px;
  max-height: 482px;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;

  a {
    cursor: pointer;
    background-color: #ae8b63;
    padding: 10px;
    border-radius: 8px;

    :hover {
      filter: brightness(110%);
    }
  }

  p {
    font-weight: 500;
    font-size: 0.875rem;
  }

  h1 {
    font-weight: 700;
  }

  h1,
  p {
    text-align: start;
    padding: 5px 0px;
  }

  input {
    height: 52px;
    padding: 15px 10px;
    width: 90%;

    border-radius: 8px;
    margin-top: 10px;
  }

  span {
    margin-top: 10px;
  }
  .divStyle {
    width: 100%;
    background-color: #ffffff;
    height: 52px;
    margin-top: 8px;
    border-radius: 8px;
    margin-bottom: 10px;
    input {
      margin: 0;
      width: 100%;
    }
    div {
      p {
        padding-top: 0.2rem;


      :focus {
        outline: 3px solid #ae8b63;
      }
    }
    }
  }

  button {
    border-radius: 8px;
    min-height: 52px;
    margin-top: 10px;
    font-size: 1.125rem;
    font-weight: 700;
    color: #ffffff;
    transition: 0.5s ease;
    :hover {
      filter: brightness(110%);
      box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
    }
  }

  button:first-of-type {
    background-color: #ae8b63;
  }
  button:last-of-type {
    background-color: #30343a;
  }

  .olhinho {
    width: 100%;
    background-color: #ffffff;
    height: 52px;
    margin-top: 8px;

    border-radius: 8px;
    display: flex;
    align-items: center;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      height: 52px;
      input {
        height: 40px;
        margin-top: 0px;
        padding: 0;
      }
    }
    p {
      margin-top: 5px;

    }
    input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
      border: none;
      margin: 0;
    }
    .buttonOlhinho {
      margin-top: 0px;
      color: #30343a;
      min-height: 35px;
      background-color: #ffffff;
    }
  }


  .error {
    color: #ff2817;
    font-size: 8px;


    .buttonOlhinho {
      margin-top: 0px;
      color: #30343a;
      min-height: 35px;
      background-color: #ffffff;
    }
  }
  .olhinho:focus-within {
    border: 3px solid #ae8b63;
  }
  .error {
    color: #ff2817;
    font-size: 8px;
  }

  @media (min-width: 768px) {
    max-width: 506px;
    max-height: 489px;
    width: 100%;
    height: 100%;

    padding: 18px 42px;

    justify-content: center;
  }
`;
