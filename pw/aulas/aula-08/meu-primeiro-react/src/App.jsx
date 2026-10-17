  import './App.css'

import Saudacao from './components/Saudacao';
import CartaoPerfil from './components/CartaoPerfil';

function App() {
  const nome = "Fabricio";
  const ano = 2026;

  return(
    <>
      <h1 className="titulo">Olá, {nome}!</h1>
      <p>Em {ano + 1} eu já vou saber React.</p>
      <p>Seu nome gritado: {nome.toUpperCase()}</p>
      <Saudacao nome="Fabricio "/>
      <Saudacao nome="Bárbara "/>
      <Saudacao nome="Vitória "/>
      
      <CartaoPerfil nome="Fabricio" emoji=":)" curso="Programação Web"/>
      <CartaoPerfil nome="Bárbara" emoji=":D" curso="Design Thinking"/>
      <CartaoPerfil nome="Vitória" emoji=":|" curso="Inteligência Artificial"/>
    </>

  );
}

export default App;

