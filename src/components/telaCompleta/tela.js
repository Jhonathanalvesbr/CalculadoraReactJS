import TelaBotao from "./telaBotao";
import "./tela.css"
import { useState } from "react";
import TelaHistorico from "./telaHistorico";

const Tela = () => {
    const [valor, setValor] = useState('0');

    const [historico, setHistorico] = useState([]);
    const [operacao, setOperacao] = useState([]);

    return (
        <div className="tela">
            <div>

                {operacao.map(element => <TelaHistorico historico={element} />)}

            </div>

            <div className="telaDisplay">
                <p>
                    {valor}
                </p>
            </div>
            <TelaBotao setValor={setValor} historico={historico}
                setHistorico={setHistorico}
                operacao={operacao} setOperacao={setOperacao}
                valor={valor} />
        </div>

    )
}

export default Tela;