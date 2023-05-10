import React from 'react'
import { getEstrenos } from '../../api/getAnimesOnEmision'
import ItemEstreno from './ItemEstreno/ItemEstreno'
const SeccionEstrenos = () => {
  return (
    <>
      <ItemEstreno name={getEstrenos()[0].name}
                    type={getEstrenos()[0].type}
                    image={getEstrenos()[0].image}
                    descripcion={getEstrenos()[0].descripcion}
                    puntuacion={getEstrenos()[0].puntuacion}/>
    </>
  )
}

export default SeccionEstrenos