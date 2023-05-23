import './Botao.css'

const Botao = (props) => {
    return (
        <button className="botao">
            {props.children} {/* props.children recebe o que está dentro do componente */}
        </button>
    )
}

export default Botao
