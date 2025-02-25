import { useState, useEffect, useContext } from 'react'
import { AutenticadoContexto } from '../Contexts/authContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import apiLocal from '../Api/index'
import './excursoes.css'

export default function Excursao() {

    const { verificarToken, token } = useContext(AutenticadoContexto);
    const navegar = useNavigate();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dia, setDiaDaExcursao] = useState('');
    const [local, setLocal] = useState('');
    const [preco, setPreco] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [imagem, setImagem] = useState(null);
    console.log(nome, preco);


    useEffect(() => {
        verificarToken();
    }, [verificarToken]); 

    function pegarImagem(e) {
        if (!e.target.files) {
            return;
        }
        const image = e.target.files[0];
        if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
            setImagem(image);
        }
    }

    async function cadastrarExcursao(e) {
        try {
            e.preventDefault();
            const data = new FormData();
            data.append('nome', nome);
            data.append('descricao', descricao);
            data.append('dia', dia);
            data.append('local', local);
            data.append('preco', preco);
            data.append('disponibilidade', disponibilidade);
            data.append('file', imagem);
            const resposta = await apiLocal.post('/CadastrarExcursoes', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success(resposta.data.dados, {
                toastId: 'ToastId'
            });
            navegar('/');
        } catch (err) {
            console.log(err);
        }

        
        setNome('');
        setDescricao('');
        setDiaDaExcursao('');
        setLocal('');
        setPreco('');
        setDisponibilidade('');
        setImagem(null);
    }

    return (
        <div className='conteinerGeralExcursoes'>
    <h1>Produtos</h1>
    <form onSubmit={cadastrarExcursao}>
        {/* Nome do produto */}
        <label >Nome:</label>
        <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
        />

        {/* Preço do produto */}
        <label >Preço:</label>
        <input
            type="text"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
        />

        {/* Descrição do produto */}
        <label >Descrição:</label>
        <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Insira a descrição do produto"
        />

        {/* Dia da excursão */}
        <label >Dia da Excursão:</label>
        <input
            type="date"
            id="dia"
            value={dia}
            onChange={(e) => setDiaDaExcursao(e.target.value)}
        />

        {/* Local */}
        <label >Local:</label>
        <input
            type="text"
            id="local"
            value={local}
            onChange={(e) => setLocal(e.target.value)}
            placeholder="Onde será a excursão?"
        />

        {/* Disponibilidade */}
        <label >Disponibilidade:</label>
        <select
            id="disponibilidade"
            value={disponibilidade}
            onChange={(e) => setDisponibilidade(e.target.value)}
        >
            <option value="disponivel">Disponível</option>
            <option value="indisponivel">Indisponível</option>
        </select>

        {/* Banner */}
        <label>Banner:</label>
        <input
            type="file"
            id="banner"
            accept='image/jpeg, image/png'
            onChange={pegarImagem}
        />

        <button type='submit'>Cadastrar</button>
    </form>
</div>

    
    );
}





