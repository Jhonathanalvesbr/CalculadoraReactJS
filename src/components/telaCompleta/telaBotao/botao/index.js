import "./index.css"

const Botao = ({label, cor = 'botao', onClick}) =>{
    return(
        <div className={cor} onClick={onClick}>
            {label}
        </div>
    )
}


export default Botao;