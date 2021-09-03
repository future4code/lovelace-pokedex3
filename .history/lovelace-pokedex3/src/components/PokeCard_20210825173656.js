import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"
import styled from "styled-components"
import PokeImagem from "./pokeImagem"

const Card = styled.div`
    display: grid;
	grid-template-columns: 200px 200px 200px 200px;
    height: 00px;
    padding: 10px;
    box-sizing: border-box;
    width: 200px;
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
            <div>
            <Card>
                <PokeImagem name={pokemon.name} />
                <p>{pokemon.id} <strong>{pokemon.name}</strong></p>
            </Card>
            <button>Adicionar ao Pokedex</button>
            <button>Detalhes</button>
            </div>
        )

    })
    return (
            <div>
            {renderizaPokemonen}
            </div>

       
    )
}

export default PokeCard