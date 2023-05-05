import styled from "styled-components";

export const StyleHeaderDashboard = styled.header`
  display: flex;
  background-color: #d3b98c;
  color: #3b3b3b;
  margin: 0 auto;
  gap: 0.5rem;

  nav {
    display: flex;
    align-items: center;
    width: 1160px;

    h2 {
      font-size: 2.25rem;
      color: #3b3b3b;
    }

    form {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: #4f4f4f;
      border-radius: 0.5rem;

      .inputSearch {
        padding: 1rem;
        color: #d3b98c;
        font-size: 1.125rem;
        font-weight: 600;
        outline: none;
        background-color: transparent;

        ::placeholder {
          font-size: 1.125rem;
          width: 600;
          color: #d3b98c;
        }
      }

      button {
        padding-right: 1rem;
        background-color: #4f4f4f;

        img {
          background-color: #4f4f4f;
          width: 1.5625rem;
          height: 1.5625rem;
        }
      }
    }
  }
  .iconFavorite {
    width: 1.6875rem;
    height: 1.6875rem;
    cursor: pointer;
  }

  .iconExit {
    width: 1.5625rem;
    height: 1.5625rem;
    cursor: pointer;
  }

  @media (min-width: 320px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;

    nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-left: 0;
      gap: 0.2rem;

      form {
        input {
          max-width: 15.4688rem;
          max-height: 3.375rem;
        }
      }

      div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;
        div {
          display: flex;
          flex-direction: row;
          gap: 2rem;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    height: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.2rem;

    nav {
      display: flex;
      width: 71.875rem;
      flex-direction: row;
      gap: 0.2rem;
      justify-content: space-between;

      form {
        align-self: flex-end;
        input {
          max-width: 15.4688rem;
          max-height: 3.375rem;
        }
      }

      div {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 2rem;
        div {
          display: flex;
          flex-direction: row;
          gap: 2rem;
        }
      }
    }
  }
`;
