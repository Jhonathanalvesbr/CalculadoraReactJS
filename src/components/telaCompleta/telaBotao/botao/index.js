import "./index.css"

const Botao = ({ label, cor = 'botao', onClick }) => {
    return (
        <div className={cor == 'botao'? cor : cor + " botao"} onClick={onClick}>
            {label}
        </div>
    )
}


export default Botao;