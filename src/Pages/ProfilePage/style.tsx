import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #d3b98c;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

export const StyledMain = styled.main`
  color: #ffff;
  font-weight: 600;
  position: relative;
  padding: 2rem 4rem;
  .img-bg {
    position: absolute;
    top: 19vh;
    width: 100%;
    height: 90vh;
    left: -20px;
    z-index: -1;
  }
  .profile-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .favorite-container {
    background-color: rgba(217, 217, 217, 0.15);
    height: 60vh;
    border-radius: 32px;
    padding: 1.5rem 3rem;
    p {
      margin-bottom: 2rem;
    }
    button {
      padding: 0.8rem 2rem;
      background-color: rgba(107, 84, 58, 1);
      color: #ffff;
      border-radius: 10px;
    }
  }
  @media (min-width: 600px) {
    .img-bg {
      width: 90vh;
    }
  }
`;
