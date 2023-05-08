import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypesColor } from "../../constants/Colors";

export const StyleTypeHover = styled.div`
    opacity: 0.5;
    transition: 0.3s ease-in-out;
    :hover{
        opacity: 1;
    }
`

export const ItemEmisionStyle = styled.a`
    display: flex;
    text-decoration: none;
    justify-content: space-between;
    align-items: center;
    color: black;
    transition: 0.3s ease-in-out;
    :hover{
        color: ${TypesColor.anime};
        svg{
            opacity: 1;
            color: ${TypesColor.anime}
        }

        & ${StyleTypeHover}{
            opacity: 1;
        }
    }
`;

export const IconPlayEmision = styled(FontAwesomeIcon)`
    color: black;
    opacity: 0.2;
    transition: 0.3s ease-in-out;
    width: 12px;
    height: auto;
`

export const AsideStyled = styled.aside`
    width: 280px;
    display: grid;
    gap: 20px;
    padding: 10px;
    background-color: white;
    height: fit-content;
    min-width: 280px;
    @media (max-width:776px){
        display: none;
    }
`

export const AsideHeaderStyled = styled.div`
    display: flex;
    justify-content: space-between;
`

export const IconPlayHeader = styled(FontAwesomeIcon)`
    color: orange;
`