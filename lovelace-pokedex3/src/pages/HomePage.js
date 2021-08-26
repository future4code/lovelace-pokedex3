
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import PokeCard from '../components/PokeCard'
import { useHistory } from "react-router"
import Button from '@material-ui/core/Button';

import { useHistory } from "react-router-dom";
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
        history.push("/pokedetalhes")
        
        
        }
    return (
        <div>
            <HeaderStyle>

                
                <Button variant='contained' color='primary' onClick={irParaPokedex}>Ir para a PokeDex</Button>
                <h1>Lista de Pokémons!</h1>
            </HeaderStyle>
            <div>
            <PokeCard/>
            </div>
            </div>
    )
}
export default HomePage

                <button onClick={() => goToPokedex(history)}>Ir para a PokeDex</button>
                <h1>Lista de Pokémons!</h1>
            </HeaderStyle>


        
            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' />


            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>


            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>


            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' />

            <button>Adicionar um Pokédex</button>
            <button onClick={irParaDetalhes}>Detalhes</button>
            

        </div>

    )
}
export default HomePage

