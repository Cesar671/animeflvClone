import React from 'react'
import { MainPageStyled,BodyStyled, Title, TitleHeaderMainPage, GlobeHoy } from '../styles/MainPageStyle'
import UltimosCapitulos from '../components/UltimosCapitulos/UltimosCapitulos'
import Menu from '../components/Menu/Menu'
import AnimesEnEmision from '../components/AnimesEnEmision/AnimesEnEmision'
import SeccionEstrenos from '../components/EstrenosAnime/SeccionEstrenos'
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
                        <Title> Últimos episodios</Title>
                        <GlobeHoy>HOY</GlobeHoy>
                    </TitleHeaderMainPage>
                    <UltimosCapitulos />
                </div>     
                <div>
                    <SeccionEstrenos />
                </div>
            </div>
        </BodyStyled>
        <footer>footer</footer>
    </MainPageStyled>
  )
}

export default MainPage