import React, { useContext } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHome } from "../routes/coordinator";
import GlobalStateContext from '../global/GlobalStateContext';
import PokeImagem from "../components/pokeImagem"
import Button from '@material-ui/core/Button';


const HeaderStyle = styled.div`
display: flex;
height: 6%;
width: 100%;
background-color: red;
color: darkblue;
align-items: center;
justify-content: space-around;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    border: solid 1px gray;
    align-items: center;
`

const Botao = styled.button`
display: flex;
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

const Pokedex = () => {

    const history = useHistory()
    const { states, setters } = useContext(GlobalStateContext)

    const removePokemon = (poke) => {

        const novaPokeLista = [...states.pokeLista, poke]

        const novaPokedex = states.pokedex.filter((pokemon) => {
            return pokemon.name !== poke.name
        })

        setters.setPokedex(novaPokedex)
        setters.setPokeLista(novaPokeLista)

        window.alert(`${poke.name} foi removido da sua Pokédex!`)
    }

    const renderizaPokemonen = states.pokedex && states.pokedex.map((pokemon) => {

        return (
            <div>
                <Card>

                    <PokeImagem name={pokemon.name} />
                    <p>{pokemon.id} <strong>{pokemon.name}</strong></p>

                    <Botao onClick={() => removePokemon(pokemon)}>Remover da Pokedex</Botao>
                    <Botao>Detalhes</Botao>
                </Card>

            </div>
        )

    })
    return (
        <div>
            <HeaderStyle>
            <Button  variant='contained' color='primary' onClick={() => goToHome(history)}>Ir para a PokeDex</Button>
                <h1>PokeDex</h1>
            </HeaderStyle>
            <Conteiner>
            {renderizaPokemonen}
            </Conteiner>
           
        </div>
    )
}
export default Pokedex
                

        