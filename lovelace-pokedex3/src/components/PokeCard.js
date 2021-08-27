import React, { useContext, useEffect, useState } from 'react';
import axios from "axios"
import styled from "styled-components"
import PokeImagem from "./pokeImagem"
import GlobalStateContext from "../global/GlobalStateContext"


const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    border: solid 1px gray;
    align-items: center;
`

const Conteiner = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;
    padding: 10px;
    gap: 20px;
    margin: 10px;

`


const Botao = styled.button`
display: flex;
`

const PokeCard = () => {

    const { states, setters } = useContext(GlobalStateContext)
    const [pokeLista, setPokeLista] = useState([])  

    console.log(states)

    const addPokemon = (poke) => {

        const novaPokedex = [...states.pokedex, poke]

        const novaListaPokemon = states.pokeLista.filter((pokemon) => {
            return pokemon.name !== poke.name
        })

        setters.setPokedex(novaPokedex)
        setters.setPokeLista(novaListaPokemon)

        window.alert(`${poke.name} foi adicionado à sua Pokédex!`)
    }

        const renderizaPokemonen = states.pokeLista && states.pokeLista.map((pokemon) => {

        return (
            <div>
                <Card>

                    <PokeImagem name={pokemon.name} />
                    <p>{pokemon.id} <strong>{pokemon.name}</strong></p>

                    <Botao onClick={() => addPokemon(pokemon)}>Adicionar ao Pokedex</Botao>
                    <Botao>Detalhes</Botao>
                </Card>

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
