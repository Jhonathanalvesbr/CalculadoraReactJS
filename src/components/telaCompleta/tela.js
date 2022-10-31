import TelaBotao from "./telaBotao";
import "./tela.css"
import { useState } from "react";
const Tela = () => {
    const [valor, setValor] = useState('0');

    return (
        <div className="tela">
            <div className="telaDisplay">
                <p>
                    {valor}
                </p>
            </div>
            <TelaBotao setValor={setValor} valor={valor} />
        </div>

    )
}

export default Tela;