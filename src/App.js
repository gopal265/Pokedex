import { Suspense, useState } from 'react';
import './App.css';
import GenFilter from './components/filters/genFilter/GenFilter';
import FetchTypes from './components/FetchTypes';
import Pokedex from './components/pokedex/Pokedex';
import PokemonContextProvider from './context/PokemonContextProvider';
import DetailsView from './components/detailsView/DetailsView';

function App() {

  return (
    <div>
      <PokemonContextProvider>
        <GenFilter >
          <Pokedex >
          <DetailsView/>
          </Pokedex>
        </GenFilter>

        
      </PokemonContextProvider>



    </div>


  );
}

export default App;
