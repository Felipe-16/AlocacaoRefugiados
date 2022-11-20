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
                        <th className="tabela__cabecalho__conteudo">Data</th>
                        <th className="tabela__cabecalho__conteudo">Valor</th>
                    </thead>
                    <tbody>
                        <tr className="tabela__linha">
                            <td className="tabela__conteudo">
                                aa
                            </td>
                            <td className="tabela__conteudo" >aa</td>
                        </tr>
                    </tbody>
                </table>
            </section >


        )
    }

}

export default Extrato;