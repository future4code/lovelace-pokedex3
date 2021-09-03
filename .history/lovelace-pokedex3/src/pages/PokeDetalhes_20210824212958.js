import React from "react"
import styled from "styled-components"

const Conteiner = styled.div`
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
margin-top: 90px;
border: 1px solid black;
height: 500px;
width: 400px;
`

const PokeDetalhes = () =>{

 return(
<Conteiner>
    <div>
    <h2>Nome:</h2>
    <h3>Poderes:</h3>
    <h3>Principais ataques:</h3>
</Conteiner>
 )
}

export default PokeDetalhes