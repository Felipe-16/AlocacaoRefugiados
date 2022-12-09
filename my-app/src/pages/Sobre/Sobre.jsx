import React, { Component } from "react";
import "./sobre.css";

class Sobre extends Component {
    render() {
        return (
            
            <div className="main-sobre">

                <div className="imagem-banner">
                <img src="https://document-export.canva.com/zsl7Y/DAFUIvzsl7Y/6/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221207T222852Z&X-Amz-Expires=22947&X-Amz-Signature=8e84bbf09d972075928831c49007024507a5bd600dcadf7d724a691caf409c52&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2008%20Dec%202022%2004%3A51%3A19%20GMT" alt="banner"/>
                </div>

                <h2 className="titulo-sobre">Sobre a Unidrop</h2>

                <p className="texto-sobre">Orgão criado para arrecadar fundos para reabilitar 
                    refugiados e realocar em espaços para acomodação</p>
                <p className="texto-sobre"><strong>Objetivo: </strong>Ajudar as pessoas a se realocarem e melhorarem de vida.</p>
                
                <h2 className="titulo-sobre">Para saber mais</h2>

                <ul className="opcoes">

                    <li>
                        <a href="/transferencia">
                            <img className="img-opcao" src="https://document-export.canva.com/0d5EY/DAFUI90d5EY/5/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221207T050612Z&X-Amz-Expires=85088&X-Amz-Signature=e4220769cbfae053923ee3476af270a886f6b05070efab8ea0843e42246e84f6&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2008%20Dec%202022%2004%3A44%3A20%20GMT" alt="doacao"/>
                        </a>
                        
                    </li>

                    <li>
                        <a href="/abrigo">
                            <img className="img-opcao" src="https://document-export.canva.com/DUdKM/DAFUI9DUdKM/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221207T065306Z&X-Amz-Expires=80967&X-Amz-Signature=d2bbc4063adbcd1605d8ee965c9efcd1fa8afbab5941726abfd2d4d5bc7e9273&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2008%20Dec%202022%2005%3A22%3A33%20GMT" alt="abrigos"/>
                        </a>
                        
                    </li>

                    <li>
                        <a href="/realocacao">
                            <img className="img-opcao" src="https://document-export.canva.com/5k0FY/DAFUIx5k0FY/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221207%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221207T113350Z&X-Amz-Expires=63917&X-Amz-Signature=15a27ef42580c722fcf4b03ef776ed551d71979bf40d5f6f91e2e2a05b0027e2&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2008%20Dec%202022%2005%3A19%3A07%20GMT" alt="realocacao"/>
                        </a>
                        
                    </li>    

                </ul>
            </div>
            

        )
    }

}

export default Sobre;