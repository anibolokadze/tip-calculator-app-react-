import styled from "styled-components";
import { colors, borderRadius } from "../../Variables";
export  const Container = styled.div`
    width: 100%;
    border-radius: ${borderRadius.medium};
    padding: 32px;
    background-color: ${colors.White};
    box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
    display: grid;
    row-gap: 20px;

    @media (min-width:900px) {
        display: flex;
        justify-content: space-between;
        max-width: 920px;
        margin: 0 auto;
        column-gap: 16px;
    }
`