import React, { Component } from "react";
import styled from 'styled-components'

class Realocacao extends Component {
    render() {
        return (
            <Formulario>
                <Titulo>Adicionar um Refugiado</Titulo>

                <Campo>
                    <Etiqueta for="nome">Nome Completo</Etiqueta>
                    <Input id="nome" type="text" name="nome" required />
                    <Etiqueta for="documento">Documento</Etiqueta>
                    <Input id="documento" type="text" name="documento" required />
                </Campo>

                <Campo>
                    <Legend>Destino de Alocação</Legend>
                    <Seletor required id="opcao_abrigo" type="string" name="opcao" >
                        <Opcoes selected disabled value="">Selecione</Opcoes>
                        <Opcoes>Abrigo 1</Opcoes>
                        <Opcoes>Abrigo 2</Opcoes>
                        <Opcoes>Abrigo 3</Opcoes>
                    </Seletor>
                </Campo>

                <BotaoWrapper>
                    <Botao type="submit">
                        Admitir
                    </Botao>
                </BotaoWrapper>

            </Formulario>


        )
    }

}

export default Realocacao;


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