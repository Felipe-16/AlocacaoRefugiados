import React, { Component } from "react";
import "./transf.css";
import { ReactDOM } from "react";

class Transferencias extends Component {
    render() {
        return (
            <form class="formulario" >
                <h2 class="formulario__titulo">Fazer uma nova doação</h2>

                <div class="form-field">
                    <label class="form-field__label" for="valor">Valor</label>
                    <input class="form-field__input" id="valor" type="number" name="valor" required />
                </div>

                <div class="form-field" >
                    <legend>Destino de doação</legend>
                    <select required id="opcao_abrigo" type="string" name="opcao" >
                        <option selected disabled value="">Selecione</option>
                        <option class="input-option" >Abrigo 1</option>
                        <option class="input-option" >Abrigo 2</option>
                        <option class="input-option" >Abrigo 3</option>
                    </select>
                </div>

                <div>
                    <p><strong>Fazer uma doação pode ajudar familias desabrigadas pela guerra!</strong></p>
                </div>

                <div class="botao-wrapper">
                    <button class="botao" type="submit">
                        Doar
                    </button>
                </div>

            </form>


        )
    }

}

export default Transferencias;