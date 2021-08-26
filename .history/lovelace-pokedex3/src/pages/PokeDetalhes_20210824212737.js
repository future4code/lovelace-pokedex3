import React from "react"
import styled from "styled-components"

const Card = styled.div`

border: 1px solid black;
height: 500px;
width: 400px;
`

const PokeDetalhes = () =>{

 return(
<Card>
    <h2>Nome:</h2>
    <h3>Poderes:</h3>
    <h3>Principais ataques:</h3>
</Card>
 )
}

export default PokeDetalhes