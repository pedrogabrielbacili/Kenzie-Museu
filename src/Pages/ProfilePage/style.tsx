import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #d3b98c;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin: 0 auto;
  justify-content: center;

  nav {
    display: flex;
    justify-content: space-between;
    width: 1150px;
    button {
      background-color: #d3b98c;
      img {
        color: #30343a;
        background-color: #d3b98c;
      }
    }
    h1 {
      color: #30343a;
    }
  }
`;

export const StyledMain = styled.main`
  color: #ffff;
  font-weight: 600;
  position: relative;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  .img-bg {
    position: absolute;
    top: 22vh;
    width: 100%;
    height: 450px;
    left: -40px;
    z-index: -1;
  }
  .profile-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .favorite-container {
    display: flex;
    flex-direction: column;
    background-color: rgba(217, 217, 217, 0.15);
    height: 70vh;
    max-width: 1000px;
    border-radius: 32px;
    padding: 2rem 1rem;
    margin: 0 auto;
    align-items: center;

    p {
      margin-bottom: 2rem;
      text-align: center;
    }
    button {
      padding: 0.8rem 2rem;
      background-color: rgba(107, 84, 58, 1);
      color: #ffff;
      border-radius: 10px;
      transition: 0.5s ease;
      font-size: 0.875rem;
      font-weight: 600;
      max-width: 15.625rem;
      :hover {
        background-color: #99764e;
        box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
      }
    }
  }

  @media (min-width: 1024px) {
    .profile-container {
      display: flex;
      flex-direction: row;
      padding: 1rem 5rem;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }
  }
`;
