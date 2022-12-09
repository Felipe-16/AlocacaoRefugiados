import React from 'react'
import "./pag404.css";
import { Link } from 'react-router-dom'


const Pagina404 = () => {
  return (
    <main className='main-404'>
      <h1 className='error'>ERROR 404</h1>
      <p className='msg-error'>
        Ops, Essa página não existe!
      </p>

      <div className='container-botao'>
      <h2 className='voltar'><Link to = '/'>Voltar para o Inicio</Link></h2>
      </div>
      
    </main>
  )
}

export default Pagina404;