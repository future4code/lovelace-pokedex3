import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokeDetalhes from "../pages/PokeDetalhes"
import Pokedex from "../pages/Pokedex"
import HomePage from "../pages/HomePage";


const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/details/:name"}>
          <PokeDetalhes/>
        </Route>

        <Route exact path={"/pokedex"}>
          <Pokedex />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;