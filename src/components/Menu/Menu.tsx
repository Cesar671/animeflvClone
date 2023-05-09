import React from 'react'
import { MenuContainer, ListMenu, MenuCenter } from './Menu-style'
import { urlLogo } from '../../constants/Items'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FaceIcon, FacebookIcon, ButtonIn, FlexJustified } from './Menu-style'
import Searcher from '../Searcher/Searcher'
import LoginButton from '../LoginButton/LoginButton'
const Menu = () => {
  return (
    <MenuContainer>
        <MenuCenter>
            <div style={{ display:"flex", alignItems:"center" }}>
                <img src={urlLogo}/>
            </div>
            <div>
                <ListMenu>
                    <FlexJustified style={{gap:"30px"}}>
                        <li><ButtonIn>INICIO</ButtonIn></li>
                        <li><ButtonIn>DIRECTORIO ANIME</ButtonIn></li>
                    </FlexJustified>
                    <FlexJustified style={{gap:"10px"}}>
                        <li><Searcher /></li>
                        <li><LoginButton/></li>
                        <li><a href='#'>
                            <FacebookIcon>
                                <FaceIcon icon={ faFacebookF }/>
                            </FacebookIcon>
                        </a></li>
                    </FlexJustified>
                    
                    
                </ListMenu>
            </div>
        </MenuCenter>
    </MenuContainer>
  )
}

export default Menu