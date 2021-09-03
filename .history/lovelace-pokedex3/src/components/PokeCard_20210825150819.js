import React, {useEffect, useState} from "react"
import { BASE_URL } from "../constants/url"


const PokeCard = () =>{

const [pokeLista, setPokeList] = useState({}) 

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

  const renderizaPokemonen = pegaPokemon && pegaPokemon.map((pokemon) => {
      <div>
      return<p>{pokemon.id} <strong>{pokemon.name}</strong></p>
      <button>Adicionar ao Pokedex</button>
      <button>Adicionar ao Pokedex</button>

      </div>
  }
  )

}

export default PokeCard