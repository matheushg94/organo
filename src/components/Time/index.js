import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (

        /*
            a sintaxe 'props.colaboradores.length > 0 && ...' significa que o react vai testar a expressão antes do operador && e, apenas se for verdade, vai renderizar o que está após o operador. Funciona com operador ternário também:
        
            props.colaboradores.length > 0 ? ... : '' ou um componente placeholder para quando não houver colaboradores no time
        
        */

        props.colaboradores.length > 0 && <section className="time" style={{ backgroundColor: hexToRgba(props.cor, '0.3') }}> {/* css inline é aceito no react para alterar propriedades dinâmicas dos componentes; hexToRgba permite trnasformar de hexadecimal para RGBA, sendo que o segundo parâmetro é a opacidade */}
            <input type='color' className='input-cor' value={props.cor} onChange={e => props.mudarCor(e.target.value, props.id)} />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    return (
                        <Colaborador 
                            key={colaborador.nome} 
                            id={colaborador.id}
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem} 
                            favorito={colaborador.favorito}
                            cor={props.cor}
                            aoDeletar={props.aoDeletar}
                            aoFavoritar={props.aoFavoritar}
                        />
                    )}
                )}
            </div>
        </section>
    )
}

export default Time
