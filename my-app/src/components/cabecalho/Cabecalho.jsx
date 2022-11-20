import React from 'react'
import { Link } from 'react-router-dom'
import './cabecalho.css'

const Cabecalho = () => {
    return (
        <header>
            <a><Link to='#'>Sobre nós</Link></a>
            <div>
                <a><Link to ='#'>Abrigos</Link></a>
                <a><Link to = '/'>Transferências</Link></a>
                <a><Link to = '/extrato'>Doações</Link></a>
            </div>

        </header>

    )
}


export default Cabecalho