import React, { Component } from "react";
import ContainerAbrigo from './Components/ContainerAbrigo'
import styled from 'styled-components'

const Container =styled.ul`
    width: 90%;
    margin: 0 auto;
    padding: 50px 0;
`


class Abrigo extends Component {
    render() {
        return (
            <Container>
                <ContainerAbrigo></ContainerAbrigo>
                <ContainerAbrigo></ContainerAbrigo>
                <ContainerAbrigo></ContainerAbrigo>
            </Container>

        )
    }

}

export default Abrigo;