import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"
import styled from "styled-components"

const Card = styled.div`
height: 400px;
width: 600px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
margin: 15px;
padding: 10px;
gap: 30px;
`

const Conteiner = styled.div`
display:flex;
    flex-wrap:wrap;
    width:80%;
    justify-content:center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-sizing:border-box;
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
        console.log("pokemon", pokemon)
        return (
            <div>
                <img alt={pokemon.name} src={pokemon.sprites} />
                <p>{pokemon.id} <strong>{pokemon.name}</strong></p>
                <button>Adicionar ao Pokedex</button>
                <button>Detalhes</button>
            </div>
        )
    })
    return (<Conteiner>
     <Card>{renderizaPokemonen}</Card>
     </Conteiner>
    )
}

export default PokeCard