import React from "react"
import { BASE_URL } from "../constants/url"

const PokeCard = () =>{

const pokeLista
const pegaPokemon = () =>{
        axios.get(`${BASE_URL}/?limit=20`)
            .then((res) => {
                setPokeList(res.data.results)
            })
            .catch((err) => {
                alert(err.response)
            })
    }}    

return(
<div>
<button>Adicionar um Pokédex</button>
<button>Detalhes</button>
</div>
)
}

export default PokeCard