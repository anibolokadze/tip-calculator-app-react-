import styled from "styled-components";
import { colors, fontSize, borderRadius } from "../../Variables"

export const Button = styled.button`
    background: ${colors.VeryDarkCyan};
    color: ${colors.White};
    padding: 5px 10px;
    border-radius: ${borderRadius.small};
    border: none;
    width: 45%;
    height: 48px;
    font-size: ${fontSize.inputs};
    cursor: pointer;

    &:hover{
        background-color: ${colors.hover};
        color: ${colors.VeryDarkCyan};
    }
    &:focus{
        background-color: ${colors.StrongCyan};
        color: ${colors.VeryDarkCyan};
    }
`;