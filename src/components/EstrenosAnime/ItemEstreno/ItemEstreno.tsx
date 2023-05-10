import React from 'react'
import { EstrenosAnime } from '../../../api/getAnimesOnEmision'
import AnimeTypes from '../../Types/AnimeTypes'
import { EstrenoContainer, ImageContainerEstreno, ImageEstreno, TitleEstreno, TypeContainer, HoverContainer } from './ItemEstrenoStyle'
import { IconEstreno } from './ItemEstrenoStyle'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
const ItemEstreno = ({name, descripcion, image, type, puntuacion}:EstrenosAnime) => {
  return (
    <EstrenoContainer>
        <a href='#'>
           <ImageContainerEstreno>
                <HoverContainer>
                    <IconEstreno icon={ faCirclePlay }/>
                </HoverContainer>
                <TypeContainer>
                    <AnimeTypes  type={ type } />
                </TypeContainer>
                <ImageEstreno  src={ image } />
                
            </ImageContainerEstreno>
            
            <TitleEstreno>
                {name}
            </TitleEstreno> 
        </a>
    </EstrenoContainer>
  )
}

export default ItemEstreno