import React from 'react'
import { MainPageStyled,BodyStyled, Title, TitleHeaderMainPage, GlobeHoy } from '../styles/MainPageStyle'
import AnimesEnEmision from '../components/AnimesEnEmision.tsx/AnimesEnEmision'
import UltimosCapitulos from '../components/UltimosCapitulos/UltimosCapitulos'
import Menu from '../components/Menu/Menu'
const MainPage = () => {
  return (
    <MainPageStyled>
        <Menu />
        <BodyStyled>
            <br/>
            <div style={{marginTop:"40px"}}>
                <AnimesEnEmision />
            </div>
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