import React from 'react'
import axios from 'axios'
import styled
    from 'styled-components'

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
                <h1>Lista de Pokémons!</h1>
                <button>Ir para a PokeDex</button>         
            </HeaderStyle>
            <div>
                <button>Ir para Pokedex</button>
                <h3>Lista de Pokémons</h3>
            </div>
        </div>

    )
}
export default HomePage


