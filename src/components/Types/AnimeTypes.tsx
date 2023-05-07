import React, { useEffect, useState } from 'react'
import { Types } from '../../constants/Types'
import { BoxType } from './style-AnimeTypes'
import { TypesColor } from '../../constants/Colors'
interface Props{
    type:Types
    capitulo?: number
}

const AnimeTypes = ({type, capitulo}:Props) => {
  const [name, setName] = useState("")
  useEffect(() => {
    let nombre:string = type.toString()
    if(nombre === Types.Episodio.toString()){
      nombre = nombre.toLowerCase()
      nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
    } 
    setName(nombre)

  }, [])
  return (
    <BoxType color={ TypesColor[`${type.toLowerCase()}`] }>
        {name}{(capitulo && " "+capitulo)}
    </BoxType>
  )
}

export default AnimeTypes