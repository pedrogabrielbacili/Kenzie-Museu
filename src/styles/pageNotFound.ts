import styled from "styled-components";

export const StyleNotFound = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #4F4F4F;

    img{
        width: 56.1875rem;
        height: 13.375rem;
    }

    h2 {
        color: white;
        font-size: 1.125rem;
    }

    @media(min-width: 320px){
        img{
            max-width: 80%;
        }

        h2{
            font-size: 1.125rem;
        }
    }
`