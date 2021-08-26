import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"
import styled from "styled-components"

const Card = styled.div`
width: fit-content;
height: 500px;
display: flex;
flex-direction: column;
flex-flow: column wrap;
margin: 15px;
padding: 10px;
gap: 30px;


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
                <img alt={pokemon.name} src={pokemon.spritesfront_default} />
                <p>{pokemon.id} <strong>{pokemon.name}</strong></p>
                <button>Adicionar ao Pokedex</button>
                <button>Detalhes</button>
            </div>
        )
    })
    return <Card>
        {renderizaPokemonen}
    </Card>

}

export default PokeCard