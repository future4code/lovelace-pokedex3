
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PokeCard from '../components/PokeCard'
import { useState } from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router'
import { goToPokedex } from "../routes/coordinator";



const HeaderStyle = styled.div`

display: flex;
height: 6%;
width: 100%;
background-color: red;
color: darkblue;
align-items: center;
justify-content: space-around;
`

   
const HomePage = () => {

    const history = useHistory()
    const irParaDetalhes = () => {
        history.push("/pokedetalhes")}

        const irParaPokedex = () => {
            history.push("/pokedex")
        }
        
        

    return (
        <div>
            <HeaderStyle>
                <Button variant='contained' color='primary' onClick={irParaPokedex}>Ir para a PokeDex</Button>
                <h1>Lista de Pokémons!</h1>
            </HeaderStyle>
            <div>
                <PokeCard />
            </div>
        </div>
    )
}
export default HomePage