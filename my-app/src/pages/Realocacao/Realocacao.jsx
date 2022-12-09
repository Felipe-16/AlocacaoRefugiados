import React, { Component } from "react";
import "./realocacao.css";

class Realocacao extends Component {
    render() {
        return (
            <form className="formulario" >
                <h2 className="formulario__titulo">Adicionar um Refugiado</h2>

                <div className="form-field">
                    <label className="form-field__label" for="nome">Nome Completo</label>
                    <input className="form-field__input" id="nome" type="text" name="nome" required />
                    <label className="form-field__label" for="documento">Documento</label>
                    <input className="form-field__input" id="documento" type="text" name="documento" required />
                </div>

                <div className="form-field" >
                    <legend>Destino de Alocação</legend>
                    <select required id="opcao_abrigo" type="string" name="opcao" >
                        <option selected disabled value="">Selecione</option>
                        <option className="input-option" >Abrigo 1</option>
                        <option className="input-option" >Abrigo 2</option>
                        <option className="input-option" >Abrigo 3</option>
                    </select>
                </div>

                <div className="botao-wrapper">
                    <button className="botao" type="submit">
                        Admitir
                    </button>
                </div>

            </form>


        )
    }

}

export default Realocacao;