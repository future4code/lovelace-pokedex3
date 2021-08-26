import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PokeCard from '../components/PokeCard'

const HeaderStyle = styled.div`

display: flex;
height: 6%;
width: 100%;
background-color: red;
color: black;
align-items: center;
justify-content: space-around;
`



const HomePage = () => {
    return (
        <div>
            <HeaderStyle>
                <button>Ir para a PokeDex</button>
                <h1>Lista de Pokémons!</h1>
            </HeaderStyle>
            <PokeCard/>
            
            </div>
    )
}
export default HomePage


