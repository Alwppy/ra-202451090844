import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const nome = "Fabricio";
  const ano = 2026;

  return(
    <>
      <h1 className="titulo">Olá, {nome}!</h1>
      <p>Em {ano + 1} eu já vou saber React.</p>
      <p>Seu nome gritado: {nome.toUpperCase()}</p>
    </>
  );
}

export default App;

