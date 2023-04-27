import React from 'react'
import { ItemEmisionStyle, IconPlayEmision } from './AnimesEmisionStyled'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
interface Props {
    name:String
    type:string
    link:string
}

const ItemEmision = ({name, type, link}: Props) => {
  return (
    <ItemEmisionStyle href={ type }>
      <IconPlayEmision icon={faCirclePlay} />
      <div style={{display: "flex", alignItems:"center"}}>
        {name}
      </div>
      <div>
        {type}
      </div>
    </ItemEmisionStyle>
  )
}

export default ItemEmision