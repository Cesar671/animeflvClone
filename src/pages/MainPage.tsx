import React from 'react'
import { MainPageStyled,BodyStyled, Title, TitleHeaderMainPage, GlobeHoy } from '../styles/MainPageStyle'
import AnimesEnEmision from '../components/AnimesEnEmision.tsx/AnimesEnEmision'
import UltimosCapitulos from '../components/UltimosCapitulos/UltimosCapitulos'
const MainPage = () => {
  return (
    <MainPageStyled>
        <div>header</div>
        <BodyStyled>
            <AnimesEnEmision />
            <div> 
                <div>
                    <TitleHeaderMainPage>
                        <Title> Últimos Capitulos</Title>
                        <GlobeHoy>HOY</GlobeHoy>
                    </TitleHeaderMainPage>
                    <UltimosCapitulos />
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