import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"
import styled from "styled-components"
import PokeImagem from "./pokeImagem"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    border: black 1px solid;
`

const Conteiner = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
`


const Botao = styled.button`
display: flex;

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
        
                <PokeImagem name={pokemon.name} />
            <Card>
                <p>{pokemon.id} <strong>{pokemon.name}</strong></p>
            </Card>
       
            <Botao>Adicionar ao Pokedex</Botao>
            <Botao>Detalhes</Botao>
            </div>
        )

    })
    return (
            <Conteiner>
            {renderizaPokemonen}
            </Conteiner>

       
    )
}

export default PokeCard