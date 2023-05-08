import React from 'react'
import { MenuContainer, ListMenu, MenuCenter } from './Menu-style'
import { urlLogo } from '../../constants/Items'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FaceIcon, FacebookIcon } from './Menu-style'
const Menu = () => {
  return (
    <MenuContainer>
        <MenuCenter>
            <div style={{ display:"flex", alignItems:"center" }}>
                <img src={urlLogo}/>
            </div>
            <div>
                <ListMenu>
                    <li>INICIO</li>
                    <li>DIRECTORIO ANIME</li>
                    <li><input type="search"/></li>
                    <li>LOGIN</li>
                    <li><a href='#'><FacebookIcon><FaceIcon icon={ faFacebookF }/></FacebookIcon></a></li>
                </ListMenu>
            </div>
        </MenuCenter>
    </MenuContainer>
  )
}

export default Menu