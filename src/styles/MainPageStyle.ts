import styled from "styled-components"
import { colorlight } from "../constants/Colors";

export const MainPageStyled = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BodyStyled = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${ colorlight.body };
`