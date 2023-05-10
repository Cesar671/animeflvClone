import React, { useEffect, useState } from 'react'
import ItemNewCap from './ItemNewCap/ItemNewCap'
import { getCapitulos } from '../../api/getAnimesOnEmision'
import { UltimosCapitulos as Ult } from '../../api/getAnimesOnEmision'
import { BloqueCapitulos } from './UltimosCapitulos-styled'

interface CapitulosState{
  isReady:boolean
  capitulos:Ult[]
}

const UltimosCapitulos = () => {
  const [capitulos, setCapitulos] = useState<CapitulosState>({isReady:false, capitulos:[]})
  useEffect(() => {
    const caps = getCapitulos()
    setCapitulos({isReady:true, capitulos:caps})
  },[])
  return (
    <BloqueCapitulos>
      { (capitulos.isReady) ? 
      capitulos.capitulos.map((data) => {
        return <ItemNewCap key={ data.name+data.capitulo+data.id } 
                                  name={ data.name } 
                                  image={ data.image } 
                                  type={ data.type }
                                  capitulo={ data.capitulo }
                                  id={ data.id }/>
      }):
      <div>Cargando ...</div>}
    </BloqueCapitulos>
  )
}

export default UltimosCapitulos