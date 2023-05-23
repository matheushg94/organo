import './Campo.css'

/*
    o parâmetro props recebido pela função vai trazer as propriedades passadas na hora de chamar o componente no App.js
*/

const Campo = ({ label, type = 'text', valor, required, placeholder, aoAlterado }) => {
    
    const aoDigitado = (e) => {
        aoAlterado(e.target.value)
    }

    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} value={valor} onChange={aoDigitado} required={required} placeholder={placeholder}/> {/* o atributo required do HTML5 vai receber o true passado pelo atributo required que criei */}
        </div>
    )
}

export default Campo
