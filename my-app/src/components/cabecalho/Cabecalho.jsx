import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Cabecalho = () => {
    return (
        <Header>
            <Opcoes><Link to='/'>Sobre nós</Link></Opcoes>
            <div>
                <Opcoes><Link to ='/abrigo'>Abrigos</Link></Opcoes>
                <Opcoes><Link to ='/realocacao'>Realocação</Link></Opcoes>
                <Opcoes><Link to = '/transferencia'>Transferências</Link></Opcoes>
                <Opcoes><Link to = '/extrato'>Doações</Link></Opcoes>
            </div>

        </Header>

    )
}


export default Cabecalho


const Header = styled.header`
    padding: 10px;
    color: white;
    display: flex;
    justify-content: space-between;
    background-color: var(--primary);
    text-align: center;
    margin-top: 0px;
`
const Opcoes = styled.a`
    a {
        color: White;
        font-weight: bold;
        text-decoration: none;
        text-transform: uppercase;
        padding-right: 10px;
    }
`
