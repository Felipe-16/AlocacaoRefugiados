import React, { Component } from "react";
import ContainerAbrigo from './Components/ContainerAbrigo'
import styled from 'styled-components'

const Container =styled.ul`
    width: 90%;
    margin: 0 auto;
    padding: 50px 0;
`

function Abrigo () {

    // const [realocacoes, setRealocacoes] = useState([])

    // useEffect(() => {
    //     axios.get("http://localhost:6000/realocacao")
    //         .then(((response) => {
    //             setDoacoes(response.data)
    //         }))
    //         .catch(() => {
    //             console.log('deu errado')
    //         })
    // }, [])


        return (
            <Container>
                <ContainerAbrigo
                    abrigo={"Abrigo 1"}
                    realocadas = {"50"}
                    doacoes={150}
                />
                <ContainerAbrigo
                    abrigo={"Abrigo 2"}
                    realocadas={"10"}
                    doacoes={250}
                />
                <ContainerAbrigo
                    abrigo={"Abrigo 3"}
                    realocadas={"30"}
                    doacoes={450}
                />
            </Container>

        )
    }


export default Abrigo