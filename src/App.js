/*
  se o arquivo js do componente for nomeado como index.js, o import só precisa do nome da pasta
*/

import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Time from './components/Time';
import { v4 as uuidv4 } from 'uuid';

/*
  a "tag" <Banner/> foi criada como um componente e importada para ser acessada aqui;
*/

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
      id: uuidv4()
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA',
      id: uuidv4()
    },
    {
      nome: 'Data Science',
      cor: '#A6D157',
      id: uuidv4()
    },
    {
      nome: 'DevOps',
      cor: '#E06B69',
      id: uuidv4()
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF',
      id: uuidv4()
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05',
      id: uuidv4()
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
      id: uuidv4()
    }
  ])

  const [colaboradores, setColaboradores] = useState([]) /* declaração de um hook. Deve ser usado quando queremos que o componente reaja a alterações no valor da variável e se renderize novamente. Em primeiro vem a variável, depois o método de atribuição */

  const aoNovoColaboradorAdicionado = colaborador => {
    setColaboradores([...colaboradores, {...colaborador, favorito: false}]); /* ...colaboradores espalha todos os itens que já estavam no array, depois adicionamos o novo colaborador ao final */
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }

      return time;
    }));
  }

  const criarNovoTime = (novoTime) => {
    setTimes([...times, {...novoTime, id: uuidv4()}]) /* setTimes vai passar um array distribuindo os times antigos e adicionando o novo ao final; o novo time será um objeto distribuindo os atributos passados e adicionado o id ao final */
  }

  const resolverFavorito = (id) => {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito;
      }

      return colaborador;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
        times={times.map(time => time.nome)} 
        criarTime={criarNovoTime}
      />

      {times.map(time => <Time
        key={time.nome}
        id={time.id} 
        nome={time.nome} 
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
        mudarCor={mudarCorDoTime} 
        aoFavoritar={resolverFavorito}
      />)}

      <Footer />
    </div>
  );
}

export default App;
