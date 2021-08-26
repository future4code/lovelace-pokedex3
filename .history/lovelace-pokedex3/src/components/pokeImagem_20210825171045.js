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

const PokeImagem = () => {
    
    const [pokeLista, setPokeList] = useState([])
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

export default PokeImagem