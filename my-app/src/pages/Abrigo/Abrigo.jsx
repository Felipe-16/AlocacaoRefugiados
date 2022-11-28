import React, { Component } from "react";
import "./abrigo.css";

class Abrigo extends Component {
    render() {
        return (
            <ul className="abrigos">
                <li>
                    <h2>Abrigo 1</h2>
                    <img src="https://www.educolorir.com/foto-campo-de-refugiados-paquist-o-dl28908.jpg"/>
                    <p className="descricao_abrigo">Abrigo 1 fica localizado na provincia de São Paulo.</p>
                    <p className="info_abrigo"> Para mais Informações</p>
                </li>
                <li>
                    <h2>Abrigo 2</h2>
                    <img src="https://www.educolorir.com/foto-campo-de-refugiados-paquist-o-dl28908.jpg"/>
                    <p className="descricao_abrigo">Abrigo 2 fica localizado na provincia de São Paulo.</p>
                    <p className="info_abrigo"> Para mais Informações</p>
                </li>
                <li>
                    <h2>Abrigo 3</h2>
                    <img src="https://www.educolorir.com/fo2o-campo-de-refugiados-paquist-o-dl28908.jpg"/>
                    <p className="descricao_abrigo">Abrigo 3 fica localizado na provincia de São Paulo.</p>
                    <p className="info_abrigo"> Para mais Informações</p>
                </li>
                <li>
                    <h2>Abrigo 4</h2>
                    <img src=""/>
                    <p className="descricao_abrigo">Abrigo 1.....</p>
                    <p className="info_abrigo"> Para mais Informações</p>
                </li>
                <li>
                    <h2>Abrigo 5</h2>
                    <img src=""/>
                    <p className="descricao_abrigo">Abrigo 1.....</p>
                    <p className="info_abrigo"> Para mais Informações</p>
                </li>
            </ul>

        )
    }

}

export default Abrigo;