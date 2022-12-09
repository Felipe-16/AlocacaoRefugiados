import React, { Component } from "react";
import "./extrato.css";
import { ReactDOM } from "react";

class Extrato extends Component {
    render() {
        return (
            <section className="container">
                <h2 className="titulo">Doações</h2>
                <table className="tabela">
                    <thead className="tabela__cabecalho">
                        <th className="tabela__cabecalho__conteudo">Abrigo</th>
                        <th className="tabela__cabecalho__conteudo">Valor</th>
                    </thead>
                    <tbody>
                        <tr className="tabela__linha">
                            <td className="tabela__conteudo">
                                Abrigo 1
                            </td>
                            <td className="tabela__conteudo" >500,00</td>
                        </tr>
                    </tbody>
                </table>
            </section >


        )
    }

}

export default Extrato;