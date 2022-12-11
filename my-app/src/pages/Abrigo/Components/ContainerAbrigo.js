import styled from 'styled-components'


function ContainerAbrigo() {

    return (
        <CaixaLi> 
            <Titulo>Abrigo 1</Titulo>
            <Media/>
            <CaixaTexto> 
                <DescricaoAbrigo>Abrigo 1 fica localizado na provincia de São Paulo.</DescricaoAbrigo>
                <DescricaoAbrigo>Já foram realocadas 10 pessoas nesse abrigo.</DescricaoAbrigo>
                <DescricaoAbrigo>Total de doações feitas para esse abrigo: R$1500.</DescricaoAbrigo>


                <DoacaoLInk href='/Transferencia'>Para realizar uma doação</DoacaoLInk>
            </CaixaTexto>

        </CaixaLi>
    )
}

export default ContainerAbrigo;

const CaixaLi = styled.li`
    display: inline-block;
    list-style: none;
    width: 30%;
    vertical-align: top;
    margin: 1.5% 1.5%;
    box-sizing:border-box ;
    /* border: 1.5px solid #000000; */
    box-shadow: 0px 2px 23px #26395338;
    border-radius: 5px;
`

const Titulo = styled.h2`
    vertical-align: middle;
    padding: 10px;
    font-weight: lighter;
`

const Media = styled.div`
    background: url("https://www.educolorir.com/foto-campo-de-refugiados-paquist-o-dl28908.jpg")center/cover;
    height: 120px;
    width: auto;
` 

const DoacaoLInk = styled.a`
    font-size: 16px;
    font-weight: bold;
    margin: 15px 0 0px 0;
    color: red;
    text-decoration:  red;
    text-decoration: underline red;
`

const CaixaTexto = styled.div`
    padding: 10px;
`
const DescricaoAbrigo = styled.p`
    font-size: var(--descricao);
    color: var(--primary);
    margin-bottom: 10px;
`