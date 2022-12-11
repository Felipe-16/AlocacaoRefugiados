import React, { Component } from "react";
import styled from 'styled-components'
import banner from '../../images/Banner.png'
import realocacao from '../../images/realocacao.png'
import doacoes from '../../images/doacoes.png'
import abrigos from '../../images/abrigos.png'
import FotosOpcao from './Components/FotosOpcao'



class Sobre extends Component {
    render() {
        return (

            <MainSobre>

                <div>
                <Imagebanner src={banner} alt="banner"/>
                </div>

                <Titulo>Sobre a Unidrop</Titulo>

                <Texto>Orgão criado para arrecadar fundos para reabilitar 
                    refugiados e realocar em espaços para acomodação</Texto>
                <Texto><strong>Objetivo: </strong>Ajudar as pessoas a se realocarem e melhorarem de vida.</Texto>
                
                <Titulo>Para saber mais</Titulo>

                <Opcoes>

                    <FotosOpcao
                        img = {doacoes}
                        href = {"/transferencia"}
                    />
                    <FotosOpcao
                        img = {abrigos}
                        href = {"/abrigo"}
                    />
                    <FotosOpcao
                        img = {realocacao}
                        href = {"/realocacao"}
                    />


                    {/* <Opcao>
                        <a href="/transferencia">
                            <ImagemOpcao className="img-opcao" src={doacoes} alt="doacao"/>
                        </a>
                        
                    </Opcao>
                    <Opcao>
                        <a href="/abrigo">
                            <ImagemOpcao className="img-opcao" src={abrigos} alt="doacao"/>
                        </a>
                        
                    </Opcao>

                    <Opcao>
                        <a href="/realocacao">
                            <ImagemOpcao className="img-opcao" src={realocacao} alt="doacao"/>
                        </a>
                        
                    </Opcao> */}

                </Opcoes>
            </MainSobre>
            

        )
    }

}

export default Sobre;


const MainSobre = styled.div`
    text-align: center;
`

const Imagebanner = styled.img`
    width:100%;
    height: 300px;
`

const Titulo = styled.h2`
    margin: 20px;
    font-size: 26px;
    text-transform: uppercase;
`

const Texto = styled.p`
    font-size: var(--subtitulo);
`

const Opcoes = styled.ul`
    width: 90%;
    margin: 0 auto;
`