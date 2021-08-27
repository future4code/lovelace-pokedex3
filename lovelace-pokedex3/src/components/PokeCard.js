import React, { useContext, useEffect, useState } from 'react';
import axios from "axios"
import styled from "styled-components"
import PokeImagem from "./pokeImagem"
import GlobalStateContext from "../global/GlobalStateContext"
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom"


const Card = styled.div`

    flex-direction: column;
    padding: 10px;
    border: solid 6px blue;
    align-items: center;
    display:inline;
   text-align: center;
   float: left;
   border-radius: 30px;
`

const Conteiner = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    justify-content: center;
    align-content: center;
    padding: 10px;
    gap: 20px;
    border-radius: 30px;

`

const Botao = styled.button`
display: flex;
`

const PokeCard = () => {
    const history = useHistory()

    const irParaDetalhes = (name) => {
        history.push(`/details/${name}`)
    }


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
            <Card>
                <PokeImagem name={pokemon.name} />
                <p>{pokemon.id} <strong>{pokemon.name}</strong></p>
                <Button variant='contained' color='secondary' onClick={addPokemon} >Adicione</Button>
                <Button variant='contained' color='primary' onClick={()=>irParaDetalhes(pokemon.name)}>Detalhes</Button>
            </Card>
        )

    })
    return (
        <Conteiner>
            {renderizaPokemonen}
        </Conteiner>


    )
}

export default PokeCard


