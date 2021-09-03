import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router"
import axios from "axios"

const Conteiner = styled.div`
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
margin-top: 80px;
border: 1px solid black;
height: px;
width: 500px;
padding: 10px;
font-family: Verdana, Geneva, Tahoma, sans-serif;

img{
    width: fit-content;
}
`


const PokeDetalhes = () => {
    const params = useParams();

    const [detalhesPokemon, setDetalhesPokemon] = useState([])
    const pegaDetalhesPokemon = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`,
            {})
            .then((res) => {
                setDetalhesPokemon(res.data)
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    console.log(detalhesPokemon, "detalhes")


    useEffect(() => {
        pegaDetalhesPokemon()
    }, [])

    const principaisAtaques = detalhesPokemon.moves && detalhesPokemon.moves.slice(0, 5);
    



    return(
        <div>
        <Conteiner >
        {detalhesPokemon.sprites && detalhesPokemon.sprites.front_default && <img src={detalhesPokemon.sprites.front_default} />}
        {detalhesPokemon.sprites && detalhesPokemon.sprites.back_default && <img src={detalhesPokemon.sprites.back_default} />}

        {detalhesPokemon.name && <h1>{detalhesPokemon.name}</h1>}

        <h1>Tipo:</h1>
        {detalhesPokemon.types && detalhesPokemon.types.map((type) => {
        return (<p key={type.type.name}>
          <h3>Tipo {type.slot}</h3>
          <p>{type.type.name}</p>
          </p>)
       })}
    </Conteiner >
<Conteiner>
        <h2>Poderes</h2>
        <p>hp: {detalhesPokemon.stats && detalhesPokemon.stats[0].base_stat}</p>
        <p>attack: {detalhesPokemon.stats && detalhesPokemon.stats[1].base_stat}</p>
        <p>defense: {detalhesPokemon.stats && detalhesPokemon.stats[2].base_stat}</p>
        <p>special-attack: {detalhesPokemon.stats && detalhesPokemon.stats[3].base_stat}</p>
        <p>special-defense: {detalhesPokemon.stats && detalhesPokemon.stats[4].base_stat}</p>
        <p>speed: {detalhesPokemon.stats && detalhesPokemon.stats[5].base_stat}</p>
        <h2>Principais ataques:</h2>
        {principaisAtaques && principaisAtaques.map((move) => {
            return <p key={move.move.name}>{move.move.name}</p>
        })}
</Conteiner>
    </div>
    )
}

export default PokeDetalhes


