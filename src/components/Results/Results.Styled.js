import styled from "styled-components";
import { colors, borderRadius, fontSize } from "../../Variables";
export const Total = styled.div`
    background: ${colors.VeryDarkCyan};
    border-radius: 15px;
    padding: 25px;
    display: grid;
    row-gap: 25px;
    color:${colors.White} ;
    h1{
        font-size: ${fontSize.headers};
    }
    p{
        font-size: ${fontSize.small};
        color: ${colors.GrayishCyan};
    }
    span{
        font-size: ${fontSize.amount};
        color: ${colors.StrongCyan};
    }

    @media (min-width: 900x) {
        width: 70%;
        margin-top: 75px;
    }
`

export const TipAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
` 
export const TotalAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Reset = styled.button`
    all:unset;
    width: 100%;
    height: 48px;
    background-color: ${colors.StrongCyan};
    color: ${colors.VeryDarkCyan};
    font-size: ${fontSize.inputs};
    text-align: center;
    border-radius: ${borderRadius.small};
    cursor: pointer;

    &:hover{
        background-color: ${colors.hover};
        color: ${colors.VeryDarkCyan};
    }

    @media (min-width: 900px) {
        margin-top: 100px;
    }


`