import React, { Component } from "react";
import styled from 'styled-components'

class Transferencias extends Component {
    render() {
        return (
            <Formulario >
                <Titulo >Fazer uma nova doação</Titulo>

                <Campo>
                    <Etiqueta className="form-field__label" for="nome">Nome Completo</Etiqueta>
                    <Input className="form-field__input" id="nome" type="text" name="nome" required />

                    <Etiqueta className="form-field__label" for="doc">Documento</Etiqueta>
                    <Input className="form-field__input" id="doc" type="text" name="doc" required />

                    <Etiqueta className="form-field__label" for="valor">Valor</Etiqueta>
                    <Input className="form-field__input" id="valor" type="number" name="valor" required />
                </Campo>

                <Campo>
                    <Legend>Destino de doação</Legend>
                    <Seletor required id="opcao_abrigo" type="string" name="opcao" >
                        <Opcoes selected disabled value="">Selecione</Opcoes>
                        <Opcoes>Abrigo 1</Opcoes>
                        <Opcoes>Abrigo 2</Opcoes>
                        <Opcoes>Abrigo 3</Opcoes>
                    </Seletor>
                </Campo>

                <div>
                    <Frase className="frase"><strong>Fazer uma doação pode ajudar familias desabrigadas pela guerra!</strong></Frase>
                </div>

                <BotaoWrapper>
                    <Botao type="submit">
                        Doar
                    </Botao>
                </BotaoWrapper>

            </Formulario>


        )
    }

}

export default Transferencias;


const Formulario = styled.form`
    background-color: white;
    padding: 16px;
    border-radius: var(--border);
    box-shadow: var(--box-shadow) rgba(0, 0, 0, 0.5);
`

const Titulo = styled.h2`
    text-transform: capitalize;
    color: var(--primary);
    font-size: var(--subtitulo);
`

const Campo = styled.div`
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    color: var(--primary);
`

const Etiqueta = styled.label`
    color: inherit;
    margin-bottom: 8px;
    font-size: var(--texto);
`

const Input = styled.input`
    padding: 8px;
    border-radius: var(--border);
    color: inherit;
    border: 2px solid;
    outline: none;
    Margin-bottom:8px;
`

const Legend = styled.legend`
    color: inherit;
    margin-bottom: 8px;
    font-size: var(--texto);
`

const Seletor = styled.select`
    padding: 8px;
    border-radius: var(--border);
    color: inherit;
    border: 2px solid;
    outline: none;
`

const Opcoes = styled.option`
    background-color: var(--secondary);
    font-size: var(--texto);
`

const BotaoWrapper = styled.div`
    display: flex;
` 

const Botao = styled.button`
    background-color: var(--primary);
    color: white;
    display: block;
    flex: 1;
    border: none;
    border-radius: var(--border);
    font-size: 16px;
    padding: 0.5em;
    cursor: pointer;
    transition: opacity 0.2s;

    :hover {
        opacity: 0.8;
    }
`

const Frase = styled.p`
    padding-top: 8px;
    padding-bottom: 16px;
    font-size: var(--subtitulo);
    color: rgb(236, 13, 13);
`