import React, { useState, useEffect } from 'react';
import GlobalStateContext from "./GlobalStateContext";
import axios from 'axios';

const GlobalState = (props) => {

    const [pokedex, setPokedex] = useState([]);
    const [pokeLista, setPokeLista] = useState([])


    const pegaPokemon = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
            .then((res) => {
                setPokeLista(res.data.results)
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    useEffect(() => {
        requests.pegaPokemon()
    }, [])


    const states = {pokedex, pokeLista}
    const setters = { setPokedex, setPokeLista}
    const requests = { pegaPokemon }

    const data = { states, setters, requests }




return (
<GlobalStateContext.Provider value={data}>
    {props.children}
</GlobalStateContext.Provider>

)
}

export default GlobalState;