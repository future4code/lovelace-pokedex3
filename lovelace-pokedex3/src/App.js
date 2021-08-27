import React from 'react'
import Router from './routes/Router';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pokedex from './pages/Pokedex';


function App() {
  return (

    <div>
      <Router />
    </div>
  );
}

export default App;
