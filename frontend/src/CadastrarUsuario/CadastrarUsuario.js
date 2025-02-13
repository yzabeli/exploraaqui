import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './cad.css'

import { toast } from 'react-toastify'
import apiLocal from '../Api/index'

export default function CadastrarUsuarios() {

    const mudarTela = useNavigate()
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [hierarquia, setHierarquia] = useState([''])
    const [idHierarquia, setIdHierarquia] = useState('')

    useEffect(()=>{
        async function listarHierarquia(){
            const resposta = await apiLocal.get('/ListarHierarquia')
            setHierarquia(resposta.data)
        }
        listarHierarquia()
    }, [])

    async function cadastroUsuarios(e) {
        try {
            e.preventDefault()
            if (!nome || !email  || !cpf || !telefone || !senha) {

                 return alert("Campos em Branco")
            }
            await apiLocal.post('/CadastroUsuarios', {
                nome,
                email,
                cpf,
                telefone,
                senha,
                idHierarquia
            })
            
            toast.success('Cadastro Efetuado Com Sucesso', {
                toastId: 'ToastId'
            })
            mudarTela('/')

        } catch (err) {
            toast.error('Erro ao Comunicar com BackEnd', {
                toastId: 'ToastId'
            })
        }
       

    }

    return (
        <div className='conteinerCadastroUsuariosGeral'>
            <h1>Formulario de Cadastro de Usuários</h1>
            <form onSubmit={cadastroUsuarios}>
                <input
                    type="text"
                    placeholder='Digite Seu Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='Digite Seu CPF'
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='Digite Seu telefone'
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Digite Seu E-Mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder='Digite Sua Senha'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <select
                value={idHierarquia}
                onChange={(e)=> setIdHierarquia(e.target.value)}
                >
                    <option>Selecione a hierarquia...</option>
                    {hierarquia.map((item)=>{
                        return(
                            <option value={item.id}>{item.nome}</option>
                        )
                    })}
                </select>
                <button type='submit'>Enviar</button>
            </form>
            <Link to='/' className='buttonVoltar' >Voltar Inicio</Link>
        </div>
    )
}