import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import axios from 'axios'

function Extrato() {

    const [doacoes, setDoacoes] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/doacoes")
            .then(((response) => {
                setDoacoes(response.data)
            }))
            .catch(() => {
                console.log('deu errado')
            })
    }, [])

    return (
        <Container>
            <Titulo className="titulo">Doações</Titulo>
            <Tabela className="tabela">
                <TabelaCabecalho className="tabela__cabecalho">
                    <ConteudoCabecalho>Abrigo</ConteudoCabecalho>
                    <ConteudoCabecalho>Valor</ConteudoCabecalho>
                </TabelaCabecalho>
                <tbody>
                    <Campos>
                        {doacoes.map((doacao, key) => {
                            return (
                                <ConteudoCampo className="tabela__conteudo">
                                    {doacao.opcao}
                                </ConteudoCampo>
                            )
                        })}
                        {doacoes.map((doacao, key) => {
                            return (
                                <ConteudoCampo className="tabela__conteudo" >{doacao.valor}</ConteudoCampo>
                            )
                        })}
                    </Campos>
                </tbody>
            </Tabela>
        </Container >


    )
}


export default Extrato


const Container = styled.section`
    max-width: 600px;
    padding: 30px;
    margin: 0 auto;
    text-align: center;
`

const Titulo = styled.h2`
    font-size: var(--subtitulo);
    font-weight: bolder;
    margin-bottom: 16px;
`

const Tabela = styled.table`
    margin: 0 auto;
    background-color: white;
    box-shadow: var(--box-shadow) rgba(0, 0, 0, 0.5);
`

const TabelaCabecalho = styled.thead`
    color: var(--primary);
`
const ConteudoCabecalho = styled.th`
    font-size: var(--texto);
    text-decoration: underline;
`

const Campos = styled.tr`
    margin-bottom: 10px;
    border-radius: var(--border);
`
const ConteudoCampo = styled.td`
    padding: 10px;

`