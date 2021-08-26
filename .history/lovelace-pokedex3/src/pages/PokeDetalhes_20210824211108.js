import React from "react"
import styled from styled-componets

const Card = styled.div`
border: 1px solid black;
height: 100px;
`

export const PokeDetalhes = () =>{

 return(
<Card>
    <h2>Nome</h2>
    <h3>Poderes</h3>
    <h3>Principais ataques</h3>
</Card>
 )
}