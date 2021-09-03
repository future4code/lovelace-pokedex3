import React from "react"

export const PokeDetalhes = () => {

    const Card = styled.div`
    padding: 10px 20px;
    border-radius: 4px;
    margin: 15px 0;
    max-width: 500px;
    `

return(
    <Card>
    <h2>Nome</h2>
    <p>Poderes</p>
    </Card>
)
}