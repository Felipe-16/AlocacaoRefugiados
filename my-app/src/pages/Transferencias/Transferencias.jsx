import React, { Component } from "react";
import "./transf.css";
import { ReactDOM } from "react";

class Transferencias extends Component {
    render() {
        return (
            <form className="formulario" >
                <h2 className="formulario__titulo">Fazer uma nova doação</h2>

                <div className="form-field">
                    <label className="form-field__label" for="nome">Nome Completo</label>
                    <input className="form-field__input" id="nome" type="text" name="nome" required />

                    <label className="form-field__label" for="doc">Documento</label>
                    <input className="form-field__input" id="doc" type="text" name="doc" required />

                    <label className="form-field__label" for="valor">Valor</label>
                    <input className="form-field__input" id="valor" type="number" name="valor" required />
                </div>

                <div className="form-field" >
                    <legend>Destino de doação</legend>
                    <select required id="opcao_abrigo" type="string" name="opcao" >
                        <option selected disabled value="">Selecione</option>
                        <option className="input-option" >Abrigo 1</option>
                        <option className="input-option" >Abrigo 2</option>
                        <option className="input-option" >Abrigo 3</option>
                    </select>
                </div>

                <div>
                    <p className="frase"><strong>Fazer uma doação pode ajudar familias desabrigadas pela guerra!</strong></p>
                </div>

                <div className="botao-wrapper">
                    <button className="botao" type="submit">
                        Doar
                    </button>
                </div>

            </form>


        )
    }

}

export default Transferencias;