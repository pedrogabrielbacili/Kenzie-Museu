import styled from "styled-components";

export const StylesCardArts = styled.div`
  background-color: #4f4f4f;
  padding: 1.875rem 0 0.625rem 0;
  padding-bottom: 5rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    max-width: 75rem;
    margin: 0 auto;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    li {
      display: flex;
      flex-direction: column;
      width: 13.75rem;
      height: 100%;
      height: 20rem;
      border-radius: 0.5rem;
      background-color: #3b3b3b;
      padding: 0.7rem;
      text-align: center;
      gap: 0.5rem;
      margin-top: 1.5rem;
      box-sizing: border-box;
      cursor: pointer;

      :hover {
        padding: 10px;
        box-shadow: 1px 3px 5px 1px #ae8b63;
      }

      img {
        width: 12.375rem;
        height: 15.1506rem;
        border-radius: 0.625rem;
      }

      p {
        font-size: 1rem;
        font-weight: 600;
        color: #d3b98c;
      }

      span {
        font-size: 0.875rem;
        color: #9f9f9f;
      }
    }
  }
`;
