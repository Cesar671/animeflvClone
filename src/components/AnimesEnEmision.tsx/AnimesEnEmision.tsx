import React, { useEffect, useState }  from 'react'
import ItemEmision from './ItemEmision'
import { getEmision, Emision } from '../../api/getAnimesOnEmision'
import { AsideStyled, AsideHeaderStyled } from './AnimesEmisionStyled'
import { IconPlayHeader } from './AnimesEmisionStyled'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
interface States{
  emision: {
    listEmision: Emision[]
    isLoad: boolean
  }
}

const AnimesEnEmision = () => {

  const [emisionAnime, setEmisionAnime] = useState<States["emision"]>({listEmision:[], isLoad:false})

  useEffect(() => { 
    const animeList = getEmision();
    setEmisionAnime({listEmision:animeList, isLoad:true})
  },[])

  return (<>
    <br />
    <br />
    <AsideStyled>
        <AsideHeaderStyled>
            <label>ANIMES EN EMISIÓN</label>
            <IconPlayHeader icon={ faPlay }/>
        </AsideHeaderStyled>
          { (emisionAnime.isLoad) ?  
          emisionAnime.listEmision.map((data) => <ItemEmision name={ data.name } 
                                                              type={ data.type } 
                                                              link={ data.url }
                                                              key={ data.name }/>)
          :<div>cargando</div>} 
        
    </AsideStyled>
  </>
    
  )
}

export default AnimesEnEmision