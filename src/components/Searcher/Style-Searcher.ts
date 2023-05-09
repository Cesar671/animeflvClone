import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearcherContainer = styled.div`
    width: 190px;
    height: 40px;
    position: relative;
    display: grid;
    grid-template-columns: 4fr 1fr;
    overflow: hidden;
    border-radius:  100px;

    @keyframes shine{
        0% {
            opacity: 0.5;
            transform: scale(1);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
        }
        100% {
            opacity: 0.5;
            transform: scale(1);
        }
    }
`;

export const SearcherInput = styled.input`
    padding: 0 10px 0 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgba(255,255,255,0.5);
    background-color: rgba(0,0,0,0.2);
    border-style: none;
    width: 87%;
    :focus{
        outline: none;
    }
`

export const SearcherButton = styled.button`
    border-style: none;
    background-color: rgba(0,0,0,0.2);
    color: white;
    width: 100%;
    :hover{
        animation: shine 2s infinite;
        cursor: pointer;
    }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
    width: auto;
`;