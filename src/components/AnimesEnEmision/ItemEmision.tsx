import React from 'react'
import { ItemEmisionStyle, IconPlayEmision, StyleTypeHover } from './AnimesEmisionStyled'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Types } from '../../constants/Types'
import AnimeTypes from '../Types/AnimeTypes'
interface Props {
    name:String
    type:Types
    link:string
}

const ItemEmision = ({name, type, link}: Props) => {
  return (
    <ItemEmisionStyle href={ link }>
      
      <div style={{display: "flex", alignItems:"center", gap:"10px"}}>
        <IconPlayEmision icon={faCirclePlay} />
        {name}
      </div>
      <StyleTypeHover>
        <AnimeTypes type={ type } capitulo={ 1 }/>
      </StyleTypeHover>

    </ItemEmisionStyle>
  )
}

export default ItemEmision