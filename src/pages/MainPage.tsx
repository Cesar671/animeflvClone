import React from 'react'
import { MainPageStyled,BodyStyled } from '../styles/MainPageStyle'
import AnimesEnEmision from '../components/AnimesEnEmision.tsx/AnimesEnEmision'
const MainPage = () => {
  return (
    <MainPageStyled>
        <div>header</div>
        <BodyStyled>
            <AnimesEnEmision />
            <div> 
                <div>
                    ultimos episodios
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