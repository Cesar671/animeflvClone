import React from 'react'
import { UltimosCapitulos } from '../../../api/getAnimesOnEmision'
import { CapituloContainer, ImageCapitulo, NameItem, DataContainer, IconPlay } from './ItemNewCapituloStyled'
import AnimeTypes from '../../Types/AnimeTypes'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const ItemNewCap = ({image, type, name, id, capitulo}:UltimosCapitulos) => {
  return (
    <CapituloContainer key={name+id+capitulo}>
        <a href='#'>
            <ImageCapitulo src={image}/>
            <DataContainer>
                <div style={{ display: "flex", justifyContent: "end"}}>
                    <IconPlay icon={faCirclePlay}/>
                </div>
                <div>
                    <AnimeTypes type={ type }/>
                    <NameItem>{ name }</NameItem>
                </div>
                
            </DataContainer>
        </a>
    </CapituloContainer>
  )
}

export default ItemNewCap