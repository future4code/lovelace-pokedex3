import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import { goToHome } from "../routes/coordinator";


const HeaderStyle = styled.div`
display: flex;
height: 6%;
width: 100%;
background-color: red;
color: black;
align-items: center;
justify-content: space-around;
`

const Pokedex = () => {

    const history = useHistory()
    
    return (
    <div>
        <HeaderStyle>
            <button onClick={() => goToHome(history)}>Ir para a PokeDex</button>
            <h1>PokeDex</h1>
        </HeaderStyle>
        <div>Pokedex</div>
    </div>
)}
export default Pokedex