import React, { createContext,useState,useContext } from 'react'


export const PokemonContext = createContext()
const PokemonContextProvider = ({children}) => {
  const [currentPokemonId,setCurrentPokemonId] = useState(-1)  
 
  
  return (
    <div>
      <PokemonContext.Provider value = {{currentPokemonId,setCurrentPokemonId}}>
        {children}
      </PokemonContext.Provider>
    </div>
  )
}

export default PokemonContextProvider

export const usePokemon = () =>{
  return useContext(PokemonContext)
}
