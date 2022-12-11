import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Pagina404 = () => {
  return (
    <main>
      <MensagemError>ERROR 404</MensagemError>
      <MensagemDescricao>
        Ops, Essa página não existe!
      </MensagemDescricao>

      <Botao>
      <TextoBotao><Link to = '/'>Voltar para o Inicio</Link></TextoBotao>
      </Botao>
      
    </main>
  )
}

export default Pagina404;

const MensagemError = styled.h1`
  margin-top: 10px; 
  text-align: center;
`

const MensagemDescricao = styled.p`
  text-align: center;
  padding: 20px;
  color: red;
`

const Botao = styled.div`
  background-color: black;
  width:fit-content;
  height: fit-content;
  border-radius: var(--border);
  position:absolute;
  left: 40%;
`

const TextoBotao = styled.h2`
  font-size: var(--subtitulo);
  display:block;
  padding: 5px;

  a {
    color: White;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    padding-right: 10px;
}


`