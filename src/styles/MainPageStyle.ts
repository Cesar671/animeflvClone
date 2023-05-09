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

export const Title = styled.h1`
    font-weight: 100;
    font-size: 25px;
`

export const TitleHeaderMainPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width:1020px){
        flex-direction: column;
        align-items: start;
    }
`

export const GlobeHoy = styled.div`
    position: relative;
    display: inline-block;
    background-color: #00bfff;
    color: white;
    padding: 5px 20px 5px 20px;
    border-radius: 30px;
    font-size: 12px;
    font-weight: bold;
    margin: 20px;

    &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        border-width: 10px 10px 0 10px;
        border-style: solid;
        border-color: #00bfff transparent transparent transparent;
    }
`;