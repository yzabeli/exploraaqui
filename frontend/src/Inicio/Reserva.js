import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reserva.css';

const Reserva = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    destino: '',
    dataChegada: '',
    dataPartida: '',
    numeroPessoas: 1,
  });

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

        <div className="form-group">
          <label>Destino:</label>
          <input
            type="text"
            name="destino"
            value={formData.destino}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Data de Chegada:</label>
          <input
            type="date"
            name="dataChegada"
            value={formData.dataChegada}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Data de Partida:</label>
          <input
            type="date"
            name="dataPartida"
            value={formData.dataPartida}
            onChange={handleChange}
            required
          />
        </div>

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

        <button type="submit">Fazer Reserva</button>
      </form>
      <Link to='/' className='buttonVoltar' >Voltar Inicio</Link>
    </div>
  );
}

export default Reserva;
