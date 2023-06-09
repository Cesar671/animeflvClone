import styled from "styled-components";

export const BoxType = styled.div`
    font-size: 11px;
    border-radius: 40px;
    color:white;
    background-color: ${props => props.color};
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 10px;
    height: 17px;
    width: fit-content;
    display: flex;
    align-items: center;
`