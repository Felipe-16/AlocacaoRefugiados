import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./abrigo.css";

class Abrigo extends Component {
    render() {
        return (
            <ul className="abrigos">
                <li>
                    <h2 className="titulo-li">Abrigo 1</h2>
                    <div className="media"></div>
                    <div className="texto-descricao">
                    <p className="descricao_abrigo">Abrigo 1 fica localizado na provincia de São Paulo.</p>
                    <p className="descricao_abrigo">Já foram realocadas 10 pessoas nesse abrigo.</p>
                    <p className="descricao_abrigo">Total de doações feitas para esse abrigo: R$1500.</p>


                    <p className="doar-link"><Link to = '/transferencia'><p>Para realizar uma doação</p></Link></p>
                    </div>
                    
                </li>

                
                
            </ul>

        )
    }

}

export default Abrigo;