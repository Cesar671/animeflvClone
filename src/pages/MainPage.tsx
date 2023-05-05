import React from 'react'
import { MainPageStyled,BodyStyled } from '../styles/MainPageStyle'
import AnimesEnEmision from '../components/AnimesEnEmision.tsx/AnimesEnEmision'
import ItemNewCap from '../components/UltimosCapitulos/ItemNewCap/ItemNewCap'
import { Types } from '../constants/Types'
const MainPage = () => {
  return (
    <MainPageStyled>
        <div>header</div>
        <BodyStyled>
            <AnimesEnEmision />
            <div> 
                <div>
                    <ItemNewCap id={ 1 } name='onePiece' image='../muestra.webp' type={ Types.Episodio } capitulo={1000}/>
                </div>     
                <div>
                    ultimos animes agregados
                </div>
            </div>
        </BodyStyled>
        <footer>footer</footer>
    </MainPageStyled>
  )
}

export default MainPage