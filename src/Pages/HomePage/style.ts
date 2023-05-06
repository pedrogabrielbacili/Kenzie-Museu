import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: #4f4f4f;
  padding: 1.875rem 0 1.25rem 0;

  .show-img {
    display: none;
  }

  button:hover {
    filter: brightness(120%);
    transition: 0.5s ease;
  }

  h1 {
    text-align: center;
    font-size: var(--font-20);
    color: #ffffff;
  }

  h1,
  .welcome {
    font-weight: var(--weight-500);
    padding: 0;
  }

  .welcome {
    font-size: var(--font-20);
    padding-bottom: 0.5rem;
    color: var(--primary-color);
    display: block;
  }

  @media (min-width: 1024px) {
    .show-img {
      display: flex;
      height: 100%;
      img {
        width: 100%;
        height: 500px;
      }
    }
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 14px;
      width: 800px;
      margin-top: 1rem;
    }
  }
`;

export const StyledDivButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  .flex-column {
    display: none;
    flex-direction: column;
  }

  span {
    color: #ae8b63;
    font-size: 0.75rem;
    font-weight: 300;
    :hover {
      color: #ae8b12;
    }
  }

  @media (min-width: 1024px) {
    width: 40%;
    padding: 0;

    span {
      font-size: 1rem;
    }

    .flex-column {
      display: flex;
    }
  }
`;

export const StyledLoginButton = styled.button`
  background-color: #ae8b63;

  height: 40px;
  max-width: 310px;
  width: 100%;
  border-radius: 8px;

  color: white;
  font-size: 20px;

  padding: 5px;

  @media (min-width: 1024px) {
    max-width: 100%;
    margin-top: 30px;
    max-width: 328px;
    height: 47px;
    :hover {
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 2.8);
    }
  }
`;

export const StyledRegisterButton = styled.button`
  background-color: #905f2e;
  height: 40px;
  max-width: 310px;
  width: 100%;
  border-radius: 8px;
  color: white;
  font-size: 20px;
  padding: 5px;
  :hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 2.8);
  }

  @media (min-width: 1024px) {
    height: 47px;
    max-width: 100%;
    max-width: 328px;
  }
`;

export const StyledDivSmallImg = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  align-items: center;
  max-width: 350px;
  align-content: center;
  justify-content: center;

  img {
    max-width: 130px;
    max-height: 121px;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    gap: 25px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    max-width: 100%;

    img {
      max-width: 249px;
      max-height: 187px;
      width: 100%;
      height: 100%;
    }
  }
`;
