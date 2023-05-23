import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css'

const Colaborador = ({ id, nome, cargo, imagem, cor, favorito, aoDeletar, aoFavoritar }) => {
    const favoritar = () => {
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 20,
        onClick: favoritar
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)} />
            <div className="cabecalho" style={{ backgroundColor: cor }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favorito'>
                    {favorito 
                        ? <AiFillHeart {...propsFavorito} color='#ff0000' /> /* passando propriedades como objeto */
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador
