import styled from "styled-components";

export const StylesCardArts=styled.div`
    background-color: #4F4F4F;
    padding: 1.875rem 0 .625rem 0;
    padding-bottom: 5rem;

    ul{
        display: flex;
        flex-wrap: wrap;
        max-width: 75rem;
        margin: 0 auto;
        gap: .5rem;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;

        li{
            display: flex;
            flex-direction: column ;
            width: 13.75rem;
            height: 100%;
            height: 20rem;
            border-radius:.5rem;
            background-color: #3B3B3B;
            padding: .7rem;
            text-align: center;
            gap: .5rem;
            margin-top:1.5rem;
            box-sizing: border-box;
            cursor: pointer;

            img{
                width: 12.375rem;
                height: 15.1506rem;
                border-radius:.625rem;
            }

            p{
                font-size: 1rem;
                font-weight: 600;
                color: #D3B98C;
            }

            span{
                font-size: .875rem;
                color: #9F9F9F;
            }
        }
    }

`