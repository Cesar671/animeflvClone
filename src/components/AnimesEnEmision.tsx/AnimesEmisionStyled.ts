import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypesColor } from "../../constants/Colors";
export const ItemEmisionStyle = styled.a`
    display: flex;
    text-decoration: none;
    justify-content: space-around;
    align-items: center;
    color: black;
    transition: 0.5s ease-in-out;
    :hover{
        color: ${TypesColor.anime};
        svg{
            opacity: 1;
            color: ${TypesColor.anime}
        }
    }
`;

export const IconPlayEmision = styled(FontAwesomeIcon)`
    color: black;
    opacity: 0.2;
    transition: 0.5s ease-in-out;
`