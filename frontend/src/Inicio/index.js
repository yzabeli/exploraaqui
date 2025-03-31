import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Importando useNavigate
import './styles.css'; 
import rio from '../imgs/rio.jpg';
import noronha from '../imgs/noronha.jpg';
import sp from '../imgs/sp.jpg';
import salvador from '../imgs/salvador.jpg';
import Login from './login';
import { FiShoppingBag } from "react-icons/fi";

const Inicio = () => {
  const [pacotesNoCarrinho, setPacotesNoCarrinho] = useState([]);
  const navigate = useNavigate();  // Hook para navegação

  // Dados dos pacotes
  const pacotes = [
    { nome: 'Pacote Aventura', preco: 'R$ 2.999,00', descricao: '7 dias em Machu Picchu' },
    { nome: 'Pacote Romântico', preco: 'R$ 1.499,00', descricao: '4 dias em Paris' },
    { nome: 'Pacote Família', preco: 'R$ 3.199,00', descricao: '5 dias na Disney' },
  ];

  // Função para adicionar pacotes ao carrinho e redirecionar para a página de Reserva
  const adicionarAoCarrinho = (pacote) => {
    setPacotesNoCarrinho([...pacotesNoCarrinho, pacote]);
    alert(`Você será redirecionado a página de reserva`);
    navigate('/Reserva', { state: { pacotesNoCarrinho: [...pacotesNoCarrinho, pacote] } });  
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Explore o Mundo</h1>
        <p>Encontre suas próximas aventuras e crie memórias inesquecíveis.</p>
        <button className="cta-button"><Link to="/Reserva">Fazer Reserva</Link></button>
      </header>

      <section className="destinos-section">
        <h2>Destinos Populares</h2>
        <div className="destinos-grid">
          {[ 
            { nome: 'Rio de Janeiro', preco: 'R$ 1.200,00', img: rio },
            { nome: 'Fernando de Noronha', preco: 'R$ 3.500,00', img: noronha },
            { nome: 'São Paulo', preco: 'R$ 800,00', img: sp },
            { nome: 'Salvador', preco: 'R$ 1.500,00', img: salvador },
          ].map((destino, index) => (
            <div key={index} className="destino-card">
              <img src={destino.img} alt={destino.nome} />
              <h3>{destino.nome}</h3>
              <p>{destino.preco}</p>
            </div>
          ))}
        </div>
      </section>

      <Login /> 

      <section className="pacotes-section">
        <h2>Pacotes Especiais</h2>
        <ul>
          {pacotes.map((pacote, index) => (
            <li key={index} className="pacote-item">
              <h3>{pacote.nome} - <span className="price">{pacote.preco}</span></h3>
              <p>{pacote.descricao}</p>
              <button className="comprar-btn" onClick={() => adicionarAoCarrinho(pacote)}>
                Comprar
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className="carrinho-section">
        <h3>Pacotes no Carrinho:</h3>
        <ul>
          {pacotesNoCarrinho.map((pacote, index) => (
            <li key={index}>{pacote.nome} - {pacote.preco}</li>
          ))}
        </ul>
        <FiShoppingBag />
      </section>
    </div>
  );
};

export default Inicio;
