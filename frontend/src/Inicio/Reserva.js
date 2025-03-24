import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Reserva.css';
import apiLocal from '../Api/index';

const Reserva = () => {
  const [excursao, setExcursao] = useState([]);
  const [idExcursao, setIdExcursao] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    numeroPessoas: 1,
  });

  useEffect(() => {
    async function listarExcursao() {
      const resposta = await apiLocal.get('/ListarExcursao');
      setExcursao(resposta.data);
    }
    listarExcursao();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reserva feita com sucesso! Detalhes: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="reserva-container">
      <h1>Faça sua Reserva</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <select
          value={idExcursao}
          onChange={(e) => setIdExcursao(e.target.value)}
        >
          <option>Selecione o Destino...</option>
          {excursao.map((item) => {
            return (
              <option key={item.id} value={item.id}>
                {item.nome}
              </option>
            );
          })}
        </select>

        <div className="form-group">
          <label>Número de Pessoas:</label>
          <input
            type="number"
            name="numeroPessoas"
            value={formData.numeroPessoas}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <button type="submit">Adicionar Reserva ao Carrinho</button>
      </form>
      <Link to="/" className="buttonVoltar">
        Voltar ao Início
      </Link>
    </div>
  );
};

export default Reserva;
