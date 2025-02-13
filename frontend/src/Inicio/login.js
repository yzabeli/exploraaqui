import React, {useContext, useState} from 'react';

import { Link } from 'react-router-dom';
import { AutenticadoContexto } from '../Contexts/authContext';
 
 
 
export default function Login(){
 
    const {loginEntrada} = useContext(AutenticadoContexto);
 
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
 
 
    async function dadosLogin(e){
 
        e.preventDefault();

 
        if(!email || !senha){
 
            alert('Preencha todos os campos!');
            return
        }
 
        try {
           
            await loginEntrada(email, senha);
 
        } catch (err) {
           
           
 
        }
    }
 
    return(
 
        <div className='conteinerInicioGeral'>
 
        <h1>Faça Login</h1>
 
        <form onSubmit={dadosLogin}>
 
            <input
            type="text"
            placeholder='Digite o E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
 
            <input
            type="password"
            placeholder='Digite a Senha'  
            value={senha}  
            onChange={(e) => setSenha(e.target.value)}      
            />
 
            <button type="Submit">Enviar</button>
        </form>
        <p>Para se cadastrar clique <Link to = '/CadastrarUsuario'>Aqui</Link></p>
        </div>
    )
}
 