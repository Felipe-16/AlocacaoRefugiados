import React from 'react'
import { Link } from 'react-router-dom'
import './cabecalho.css'

const Cabecalho = () => {
    return (
        <header>
            <a><Link to='/'>Sobre nós</Link></a>
            <div>
                <a><Link to ='/abrigo'>Abrigos</Link></a>
                <a><Link to ='/realocacao'>Realocação</Link></a>
                <a><Link to = '/transferencia'>Transferências</Link></a>
                <a><Link to = '/extrato'>Doações</Link></a>
            </div>

        </header>

    )
}


export default Cabecalho