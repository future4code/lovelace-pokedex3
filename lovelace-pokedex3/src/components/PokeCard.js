import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import PokeImagem from "./pokeImagem"

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








const PokeCard = () => {
const history = useHistory ()



    const [pokeLista, setPokeList] = useState([])

    const pegaPokemon = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
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
            <Card>
        
                <PokeImagem name={pokemon.name} />
                <p>{pokemon.id} <strong>{pokemon.name}</strong></p>
              
            <Button variant='contained' color='secondary' >Adicione</Button>
            <Button variant='contained' color='primary'>Detalhes</Button>
           
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

