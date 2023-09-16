import axios from "axios"

const base_url = 'https://pokeapi.co/api/v2/';

const cache = {}

// make request to pokeAPI

const fetch =  async ( endpoint) =>{
    if ( ! cache[ endpoint ] ) {
        const data = await axios.get(`${base_url}${endpoint}`)

    cache[endpoint] = data
    }
    return cache[endpoint]
    
}

// fetch all pokemons
export const fetchPokemons = (limit,offset) =>{
    
    return fetch(`pokemon?limit=${limit}&offset=${offset}`)

}

// fetch a specific pokemon
export const fetchPokemon = (pokemonName) =>{
    return fetch(`pokemon/${pokemonName}`)
}

