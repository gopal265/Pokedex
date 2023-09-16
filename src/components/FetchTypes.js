import React, { useEffect, useState } from 'react'
import axios from "axios"


const FetchTypes = () => {
  
const [types,setTypes] = useState([])
  const getPokemonTypes = async() =>{
    
    await axios.get("https://pokeapi.co/api/v2/type")
    .then(res =>  res.data.results)
    .then(res => res.map(item => item.name))
    .then(res => setTypes(res))
    .catch(err => console.log(err))
  }

  useEffect(()=>{
    getPokemonTypes()
  })
    return (
    <div>
      <select>
        <option key='default'>select</option>
        {types.map((type,index) =>(
            <option key={index}>{type}</option>
        )

        )}
      </select>
    </div>
  )
}

export default FetchTypes
