import "./index.css"

const Botao = ({ label, cor = 'botao', onClick }) => {
    return (
        <button className={cor === 'botao' ? cor : cor + " botao"} onClick={onClick}>
            {label}
        </button>
    )
}


export default Botao;