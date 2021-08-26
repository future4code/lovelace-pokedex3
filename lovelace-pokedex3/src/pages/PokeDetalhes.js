
import React from "react"
import styled from "styled-components"

const Conteiner = styled.div`
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
margin-top: 80px;
border: 1px solid black;
height: 500px;
width: 400px;
padding: 10px;
`


const PokeDetalhes = () =>{

 return(
<Conteiner>
    <div>
    <h2>Nome:</h2>
    <h3>Poderes:</h3>
    <h3>Principais ataques:</h3>
    </div>
</Conteiner>
 )
}

export default PokeDetalhes

// import React from 'react'
// import HomePage from "./pages/HomePage"






// // function PokeDetalhes () {
// //     return (
// //     <div>
// //     <h1>Detalhes dos Pokemons</h1> 
    

// // <h3>Poderes</h3>

// // <h3>Principais Ataques</h3>
// //     </div>
// //     )
// //   }
  
// //   export default PokeDetalhes;

