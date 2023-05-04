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
  }

  input {
    height: 52px;
    padding: 15px 10px;
    width: 100%;

    border-radius: 8px;
    margin-top: 10px;
  }

  span {
    margin-top: 10px;
  }

  button {
    border-radius: 8px;
    height: 52px;
    margin-top: 10px;
    font-size: 1.125rem;
    font-weight: 700;
    color: #ffffff;
  }

  button:first-of-type {
    background-color: #ae8b63;
  }
  button:last-of-type {
    background-color: #30343a;
  }

  button:hover{
    filter: brightness(110%);
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
