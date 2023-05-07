import styled from "styled-components";

export const StyledArtDiv = styled.div`
  span {
    font-weight: 600;
    color: #ae8b63;
  }

  h2 {
    padding-left: 0.5rem;
  }

  h4 {
    padding-left: 0.5rem;
    padding-top: 0.5rem;
  }
  section {
    max-width: 100%;
    :hover {
      box-shadow: 5px 5px 10px 1px #ae8b63;
    }
  }

  @media (min-width: 320px) {
    color: white;
    display: flex;
    max-width: 100%;

    section {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      margin-bottom: 3rem;

      .divImg {
        height: 400px;
      }
      .divTitle {
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        gap: 0.5rem;
        align-items: baseline;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 2rem 0 2rem;
        background-color: #30343a;
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
        padding: 1rem;
      }
    }
  }

  img {
    max-width: 400px;
    max-height: 400px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  @media (min-width: 678px) {
    display: flex;
    width: 100%;

    section {
      display: flex;
      flex-direction: row;
      margin-top: 2rem;

      .divTitle {
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        gap: 0.5rem;
        align-items: baseline;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 2rem 0 2rem;
        background-color: #30343a;
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 0px;
        padding: 1rem;
      }
    }

    img {
      max-width: 400px;
      max-height: 400px;
      border-bottom-left-radius: 8px;
      border-top-left-radius: 8px;
      border-top-right-radius: 0px;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;

    section {
      margin-top: 2rem;
      display: flex;
      flex-direction: row;
    }
  }
  img {
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 400px;
  }
`;

export const StyledMain = styled.main`
  background-color: #4f4f4f;
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

export const StyledSpanBtnDiv = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 1.3rem;
    background-color: #6b543a;
    color: white;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    padding: 15px 0px;
    transition: 0.5s ease;
    max-width: 300px;

    :hover {
      background-color: #99764e;
      box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
    }
  }
`;
