import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"
import styled from "styled-components"
import PokeImagem from "./pokeImagem"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
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

    useEffect(() => {
        pegaPokemon()
    }, [])

    const renderizaPokemonen = pokeLista && pokeLista.map((pokemon) => {

        return (
            <Card>
                <PokeImagem name={pokemon.name} />
                <p>{pokemon.id} <strong>{pokemon.name}</strong></p>
                <button>Adicionar ao Pokedex</button>
                <button>Detalhes</button>
            </Card>
        )

    })
    return (
        <div>
            <Card>{renderizaPokemonen}</Card>

        </div>
    )
}

export default PokeCard