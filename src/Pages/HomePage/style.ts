import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: #4f4f4f;
  padding: 1.875rem 0 1.25rem 0;

  .show-img {
    display: none;
  }

  button:hover {
    filter: brightness(120%);
  }

  h1 {
    text-align: center;
    font-size: var(--font-26);
    color: #ffffff;
  }

  h1,
  .welcome {
    font-weight: var(--weight-500);
  }

  .welcome {
    font-size: var(--font-22);
    color: var(--primary-color);
    display: block;
  }

  @media (min-width: 1024px) {
    .show-img {
      display: flex;
      width: 45%;
    }
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 14px;
    }
    h1 {
      margin-bottom: 20px;
    }
  }
`;

export const StyledDivButtons = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  align-items: center;
  gap: 14px;

  .flex-column {
    display: none;
    flex-direction: column;
  }

  span {
    color: #ae8b63;
    font-size: 0.75rem;
    font-weight: 300;
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
    height: 70px;
    max-width: 100%;
    margin-top: 60px;
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

  @media (min-width: 1024px) {
    height: 70px;
    max-width: 100%;
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
