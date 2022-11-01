import "./index.css"
/* eslint no-eval: 0 */
const TelaHistorico = ({ historico }) => {
    return (
        <div>
            <p className="historico"> {historico + " = " + eval(historico)} </p>
        </div>
    )
}

export default TelaHistorico