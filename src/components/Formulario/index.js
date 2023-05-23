import './Formulario.css'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const aoSalvar = (e) => { /* sintaxe de declaração de função em uma constante */
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            id: uuidv4()
        })

        /* atribuindo strings vazias para os states para limpar os campos do formulário quando for submetido */

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo 
                    required={true}
                    label="nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                /> {/* required={true} vai passar o valor true por esse atributo */}
                <Campo
                    required={true}
                    label="cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    required={true}
                    label="time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.criarTime({nome: nomeTime, cor: corTime});
                setNomeTime('');
                setCorTime('');
            }}>
                <h2>Preencha os dados para criar o novo time</h2>
                <Campo 
                    required
                    label="nomeTime"
                    placeholder="Digite o nome do novo time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                /> {/* required={true} vai passar o valor true por esse atributo, ={true} pode ser omitido */}
                <Campo
                    required
                    label="corTime"
                    type='color'
                    placeholder="Digite a cor do novo time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
