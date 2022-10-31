import { useState } from "react";
import Botao from "./botao";
import "./index.css"

/* eslint no-eval: 0 */
const TelaBotao = ({ setValor, valor }) => {
    const [hisotrico, setHistorico] = useState([]);

    function stripZeros(str) {
        return str.replace(/(^0+(?=\d))|(,?0+$)/g, '');
    }

    const getValor = (getValor) => {
        if (getValor === "limpar") {
            setValor("0")
            setHistorico([]);
        }
        else if (getValor === "raizQuadrada") {
            setValor(Math.sqrt(eval(stripZeros(valor))))
        }
        else if (getValor === "pow") {
            setValor(valor + "**");
        }
        else if (getValor === "=") {
            console.log(valor)
            setValor(eval(stripZeros(valor)));
        }
        else if (getValor === "voltar") {
            if (hisotrico.length > 0) {
                setHistorico(hisotrico => { hisotrico.pop(hisotrico.length - 1); return hisotrico });
                setValor(hisotrico[hisotrico.length - 1]);
            }
            else {
                setHistorico([]);
                setValor('0');
            }
            return;
        }
        else {

            if (valor === '0') {
                console.log(valor, getValor)
                setValor(getValor);
            }
            else
                setValor(valor + "" + getValor + "");
        }
        if (["limpar", "voltar", undefined].indexOf(getValor) === -1) {
            if ("pow" === getValor)
                setHistorico(hisotrico => hisotrico.concat(valor + "**"));
            else
                setHistorico(hisotrico => hisotrico.concat(valor + ""));

        }

    }

    return (
        <div className="telaFundo">
            <div className="telaBotao">
                <Botao label="A/C" cor="botaoVerde" onClick={() => getValor("limpar")} />
                <Botao label="√" cor="botaoVerde" onClick={() => getValor("raizQuadrada")} />
                <Botao label="*" cor="botaoVerde" onClick={() => getValor("pow")} />
                <Botao label="÷" cor="botaoVermelho" onClick={() => getValor("/")} />
            </div>
            <div className="telaBotao">
                <Botao label="7" onClick={() => getValor(7)} />
                <Botao label="8" onClick={() => getValor(8)} />
                <Botao label="9" onClick={() => getValor(9)} />
                <Botao label="x" cor="botaoVermelho" onClick={() => getValor("*")} />
            </div>
            <div className="telaBotao">
                <Botao label="4" onClick={() => getValor(4)} />
                <Botao label="5" onClick={() => getValor(5)} />
                <Botao label="6" onClick={() => getValor(6)} />
                <Botao label="-" cor="botaoVermelho" onClick={() => getValor("-")} />
            </div>
            <div className="telaBotao">
                <Botao label="1" onClick={() => getValor(1)} />
                <Botao label="2" onClick={() => getValor(2)} />
                <Botao label="3" onClick={() => getValor(3)} />
                <Botao label="+" cor="botaoVermelho" onClick={() => getValor("+")} />
            </div>
            <div className="telaBotao">
                <Botao label="↺" onClick={() => getValor("voltar")} />
                <Botao label="0" onClick={() => getValor("0")} />
                <Botao label="." onClick={() => getValor(".")} />
                <Botao label="=" cor="botaoVermelho" onClick={() => getValor("=")} />
            </div>
        </div >
    )

}


export default TelaBotao;