import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import PokeImagem from "./pokeImagem"
import { useHistory } from "react-router-dom"

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
                
            <Botao>Adicionar ao Pokedex</Botao>
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
