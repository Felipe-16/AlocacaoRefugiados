import styled from 'styled-components'


function FotosOpcao({ img, href }) {
    return (

            <Opcao>
                <a href={href}>
                    <ImagemOpcao src={img} />
                </a>

            </Opcao>

    )

}

export default FotosOpcao


const Opcao = styled.li`
    display: inline-block ;
    text-align: center;
    width: 30%;
    vertical-align: top;
    margin: 1.5% 1.5%;
    padding:5px 5px;
`

const ImagemOpcao = styled.img`
    border: 1px solid #000000;
    border-radius: 10px;
    width: 250px;
`