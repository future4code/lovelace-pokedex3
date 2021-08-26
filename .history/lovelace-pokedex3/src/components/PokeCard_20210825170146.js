import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"
import styled from "styled-components"

const Card = styled.div`
    display:grid;
    height: 600px;
    grid-template-columns: 300px 300px 300px 300px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    box-sizing: border-box;

`

const PokeCard = () => {
    
    const [pokeLista, setPokeList] = useState([])

    const pegaPokemon = () => {

        axios.get(`${BASE_URL}/?limit=20`)
            .then((res) => {
                setPokeList(res.data.results)
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    
    const pegaPokemon2 = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            .then((res) => {
                setPokeList(res.data.sprites.front_default)
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    useEffect(() => {
        pegaPokemon()
    }, [])

    const renderizaPokemonen = pokeLista && pokeLista.map((pokemon) => {
      
        return (
            <div>
                {pegaPokemon2}
                <Card
                   pokemon={pokemon}
            />
                <img alt={pokemon.name} src={pokemon.sprites} />
                <p>{pokemon.id} <strong>{pokemon.name}</strong></p>
                <button>Adicionar ao Pokedex</button>
                <button>Detalhes</button>
            </div>
        )
        
    })
    return (
        <div>
     <Card>{renderizaPokemonen}</Card>

     </div>
    )
}

export default PokeCard