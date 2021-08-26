import React, { useEffect, useState } from "react"
import { BASE_URL } from "../constants/url"
import axios from "axios"
import styled from "styled-components"



const PokeImagem = (props) => {
    
    const [pokeLista, setPokeList] = useState([])
    const pegaPokemon2 = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then((res) => {
                setPokeList(res.data.sprites.front_default)
            })
            .catch((err) => {
                alert(err.response)
            })
    }

    useEffect(() => {
        pegaPokemon2()
    }, [])

    
    return (
        <div>
        
     <Card><img src={pokeLista}/></Card>

     </div>
    )
}

export default PokeImagem