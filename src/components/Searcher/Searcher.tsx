import React from 'react'
import { SearcherContainer, SearcherInput, SearcherButton, SearchIcon } from './Style-Searcher'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Searcher = () => {
  return (
    <SearcherContainer>
        <SearcherInput type="text" placeholder='Buscar...'/>
        <SearcherButton> <SearchIcon icon={ faSearch }/> </SearcherButton>
    </SearcherContainer>
  )
}

export default Searcher