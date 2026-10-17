  import './App.css'

import Saudacao from './components/Saudacao';

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
      <Saudacao />
    </>

  );
}

export default App;

