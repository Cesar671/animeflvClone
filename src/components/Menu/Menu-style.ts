import styled from "styled-components";
import { colorlight } from "../../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FaceIcon = styled(FontAwesomeIcon)`
    font-size: 22px;
    color: white;
`
export const FacebookIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1877f2;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const MenuContainer = styled.nav`
    background-color: ${ colorlight.header };
    position: relative;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255,255,255);
    font-weight: 700;
    white-space: nowrap;
    li{
        list-style: none;
    }
`;

export const MenuCenter = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1170px;
    @media(max-width:1200px){
        width: 960px;
    }

    @media(max-width:960px){
        width: 735px;
    }


`

export const ListMenu = styled.ul`
    display: flex;
    gap: 20px;
    align-items: center;
    @media(max-width: 1020px){
        display: none;
    }
`

export const ButtonIn = styled.a`
    opacity: 0.5;
    text-decoration: none;
    :hover{
        opacity: 1;
    }
`

export const ButtonOut = styled.button`
    :hover{
        opacity: 0.5;
    }
`
export const FlexJustified = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
