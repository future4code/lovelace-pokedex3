import React from 'react'
import Router from './routes/Router';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import PokeDetalhes from './pages/PokeDetalhes';


function App() {
  return (

    <div>
      <Router exact path={"/pokedetalhes"}>
        <PokeDetalhes/>

      </Router>
    </div>


  );
}

export default App;
