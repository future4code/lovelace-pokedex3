import React, {useEffect, useState} from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"
import styled from "styled-components"

const Card = styled.div`
width: 250px;
height:250px;
display:grid;
grid-template-columns: 100px 100px 100px 100px;
margin:16px;
padding: 10px;
`


const PokeCard = () =>{
const [pokeLista, setPokeList] = useState([]) 

const pegaPokemon = () =>{

        axios.get(`${BASE_URL}/?limit=20`)
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
      return(
      <div>
      <p>{pokemon.photo} {pokemon.id} <strong>{pokemon.name}</strong></p>
      <button>Adicionar ao Pokedex</button>
      <button>Detalhes</button>
      </div>
      )
  })
  return <Card>
      {renderizaPokemonen}
  </Card>

}

export default PokeCard