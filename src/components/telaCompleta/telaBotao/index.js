import Botao from "./botao";
import "./index.css"

/* eslint no-eval: 0 */
const TelaBotao = ({ setValor, valor, historico, setHistorico, operacao, setOperacao }) => {

    function stripZeros(str) {
        return str.replace(/(^0+(?=\d))|(,?0+$)/g, '');
    }

    const getValor = (getValor) => {
        if (getValor === "limpar") {
            setOperacao([]);
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
            setOperacao(operacao => operacao.concat(valor + "" + getValor.substr(0, getValor.length - 2)));
            setValor(eval(stripZeros(valor)));
        }
        else if (getValor === "voltar") {
            if (historico.length > 0) {
                setHistorico(historico => { historico.pop(historico.length - 1); return historico });
                setValor(historico[historico.length - 1]);
            }
            else {
                setHistorico([]);
                setValor('0');
            }
            return;
        }
        else {
            if (valor === '0') {
                setValor(getValor);
            }
            else
                setValor(valor + "" + getValor + "");
        }
        if (["limpar", "voltar", undefined].indexOf(getValor) === -1) {
            if ("pow" === getValor)
                setHistorico(historico => historico.concat(valor + "**"));
            else
                setHistorico(historico => historico.concat(valor + ""));

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