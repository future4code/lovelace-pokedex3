import React from 'react'
import Router from './routes/Router';
import GlobalState from './global/GlobalState';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pokedex from './pages/Pokedex';


function App() {
  return (

    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
