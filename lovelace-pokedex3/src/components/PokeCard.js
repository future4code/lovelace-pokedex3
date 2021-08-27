import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import PokeImagem from "./pokeImagem"

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

    const [pokedex, setPokedex] = useState([]);
    const [pokeLista, setPokeLista] = useState([])
    console.log(pokedex)

    const addPokemon = (poke) => {

        const novaPokedex = [...pokedex, poke]

        const novaListaPokemon = pokeLista.filter((pokemon) => {
            return pokemon.name !== poke.name
        })

        setPokedex(novaPokedex)
        setPokeLista(novaListaPokemon)

        window.alert(`${poke.name} foi adicionado à sua Pokédex!`)
    }

    const pegaPokemon = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
            .then((res) => {
                setPokeLista(res.data.results)
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
