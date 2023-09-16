import React, { createContext, useContext, useEffect } from 'react'
import useGeneration from '../../hooks/useGeneration'
import Loader from '../Loader'
import Card from "../card/Card"
import "./Pokedex.css"
import { genContext } from '../filters/genFilter/GenFilter'
import { usePokemon } from '../../context/PokemonContextProvider'
const CurrentPokemon = createContext()
const Pokedex = ({children}) => {
    const generation = useContext(genContext) 
    const {currentPokemonId,setCurrentPokemonId} = usePokemon()
    const {data,isLoading} = useGeneration(generation)
    const currentPokemon = data[currentPokemonId]
    console.log(currentPokemon)
    
    console.log(generation)
    if (isLoading){
        return <Loader />
    }
  return (
    <div>
      <div className='pokedex-view'>
        
        {
        data.map(pokemon =>(
            <Card pokemon={pokemon} key={pokemon.id}  onClick={()=> setCurrentPokemonId(pokemon.id)}/>
        ))
        }
      
      </div>
      <CurrentPokemon.Provider  value={currentPokemon}>
        {children}
      </CurrentPokemon.Provider>
      
    </div>
  )
}

export default Pokedex

export const  useCurrentPokemon = () =>{
       return useContext(CurrentPokemon)
}
