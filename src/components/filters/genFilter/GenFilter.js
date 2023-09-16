import React, {  createContext, useState } from 'react'
import generations from '../../../filterData/generations'
import "./GenFilter.css"


export const genContext = createContext()
const GenFilter = ({children}) => {
    const [gen,setGen] = useState(1)
    console.log(gen)
  return (
         <div>
        <div className='gen-filter center'>
        {generations.map(g =>(
        <div className={`gen-filter-item  ${gen === g.id ? "gen-active" : ""} `} key={g.id} onClick={() =>setGen(g.id)}>{g.text}</div>
      ))}
        </div>
          <genContext.Provider value={gen}>
            {children}
          </genContext.Provider>
        </div>
       
    
    
  )
}

export default GenFilter
