import React from 'react'
import { Types } from '../../constants/Types'
import { BoxType } from './style-AnimeTypes'
import { TypesColor } from '../../constants/Colors'
interface Props{
    type:Types
    capitulo?: number
}

const AnimeTypes = ({type, capitulo}:Props) => {
  return (
    <BoxType color={ TypesColor[`${type.toLowerCase()}`] }>
        {type.toString()}{(capitulo && " "+capitulo)}
    </BoxType>
  )
}

export default AnimeTypes