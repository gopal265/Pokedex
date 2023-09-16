import generations from "../filterData/generations"
import {fetchPokemons ,fetchPokemon} from '../api/index'
import { useCallback, useEffect, useMemo,useState } from "react"

const useGeneration = (genId) =>{

    const [pokemons,setPokemons] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const gen = useMemo(() =>{
        return generations.find((genItem) => genItem.id === genId)
    },[genId]) 

    const fetchData = useCallback(() =>{

        if (gen.limit === null || gen.offset === null){
            return
        }
        setIsLoading(true)
        setPokemons([])
        fetchPokemons(gen.limit,gen.offset).then(async (res) =>{
            const data = []
            const results = res.data.results
            await Promise.all(results.map( async ({name}) =>{
                const pokemon = await fetchPokemon(name).then(res =>res.data)
                data[pokemon.id] = pokemon
            }))

            setPokemons(data)
            setIsLoading(false)
            
        
        })
    },[genId])

    useEffect(()=>{
        if (genId){
            fetchData()
        }
    },[genId])

    return {
        data : pokemons,
        refetch:fetchData,
        isLoading
    }
}




export default useGeneration;