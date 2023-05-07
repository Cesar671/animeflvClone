import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconPlay = styled(FontAwesomeIcon)`
    width: 20px;
    height: 20px;
    color: white;
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
    transition-delay: 0.1s;
`

export const CapituloContainer = styled.div`
    min-width: 197.5px;
    min-height: 138.25px;
    max-width: 197.5px;;
    max-height: 138.25px;
    position: relative;
    width: auto;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
    overflow: hidden;
    margin: 0;
    padding: 0;
    :hover{
        a img{
            transform: scale(1.2);
            opacity: 0.7;
        }

        a div div ${ IconPlay }{
            transform: translateX(50px);
            opacity: 0;
        }
    }

    a{
        display: flex;
        flex-direction: column;
    }
    @media(max-width:777px){
        max-height: 100%;
        max-width: 100%;
    }
`

export const ImageCapitulo = styled.img`
    width: auto;
    height: auto;
    transition: all 0.1s ease-in-out;
`
export const DataContainer = styled.div`
    top: 0;
  left: 0;
  width: 100%;
  height: 100%;
    z-index: 10;
    position: absolute;
    min-width: 197.5px;
    min-height: 138.25px;
    display: flex;
    flex-direction: column;
    background: rgb(131,58,180);
    background: linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(10,3,3,1) 100%);
    border-radius: 0 0 5px 5px;
    padding: 10px;
    box-sizing: border-box;
    justify-content: space-between;
`
export const NameItem = styled.div`
    color: white;
    font-weight: 700;
    font-size: 15px;
    
`