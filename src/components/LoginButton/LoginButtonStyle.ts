import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const LoginButtoncontainer = styled.button`
    position: relative;
    border-style: none;
    background-color: rgba(0,0,0,0.2);
    border-radius: 7px;
    padding: 13px;
    color:white;
    font-weight: 700;
    font-size: 12px;
    display: flex;
    gap: 10px;
    transition: all 0.5s ease-in-out;
    :focus{
        outline: none;
    }
    :hover{
        background-color: rgba(0,0,0,0.7);
        cursor:pointer;
    }
`

export const LoginIcon = styled(FontAwesomeIcon)`
    
`;