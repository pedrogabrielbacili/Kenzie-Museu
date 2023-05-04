import styled from "styled-components";

export const StyledArtDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  img {
    width: 300px;
    height: 300px;
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
    background-color: #6b543a;
    color: white;
    width: 50%;
    height: 48px;
    border-radius: 8px;
  }
`;
