import styled from "styled-components";

export const BloqueCapitulos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 10px;
    gap: 20px;
    justify-content: center;
    max-width: 840px;
    @media (max-width:1200px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width:1020px){
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width:467px){
        grid-template-columns: 1fr;
    }
`;