import styled from "styled-components";
import { TypesColor } from "../../../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function hexToRgb(hex:string):string {
    // Eliminar el símbolo de almohadilla (#) si está presente
    hex = hex.replace("#", "");
  
    // Convertir los valores hexadecimales a decimales
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
  
    // Devolver el resultado en formato RGB
    return "rgba(" + r + ", " + g + ", " + b + ",0.4)";
  }

export const TitleEstreno = styled.div`
    font-weight: 700;
    font-size: 13px;
    transition: all 0.2s ease-in-out;
`

export const IconEstreno = styled(FontAwesomeIcon)`
    width: 50px;
    height: auto;
    color: white;
`

export const TypeContainer = styled.div`
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 10px;
    box-sizing: border-box;
`

export const HoverContainer = styled.div`
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    background-color: ${ hexToRgb(TypesColor.anime) };
    z-index: 100;
`

export const ImageContainerEstreno = styled.div`
    width: auto;
    position: relative;
    transition: all 0.2s ease-in-out;
`

export const ImageEstreno = styled.img`
    width: 100%;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
    box-shadow: 6px 6px 3px 3px rgba(0,0,0,0.2);
`   
export const EstrenoContainer = styled.div`
    
    width: 195.5px;
    height: fit-content;
    display: flex;
    justify-content: center;
    text-align: center;
    transition: all 0.2s ease-in-out;
    a{
        display: flex;
        text-decoration: none;
        position: relative;
        flex-direction: column;
        gap: 10px;
    }

    :hover{
        a ${TitleEstreno}{
            color: ${ TypesColor.anime };
        }

        a ${ ImageContainerEstreno } ${ HoverContainer } {
            opacity: 1;
        }
    }


`;