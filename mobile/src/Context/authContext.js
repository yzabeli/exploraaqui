import { createContext, useState, useEffect } from 'react';
import apiLocal from '../../api/apiLocal';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AutenticadoContexto = createContext();

export default function AuthProvider({ children }) {
    
    const [tokenT, setTokenT] = useState('');
    const [token, setToken] = useState('');
    const [usuarioId, setUsuarioId] = useState('');

   
    useEffect(() => {
        if (token) {
            AsyncStorage.setItem('@token', JSON.stringify(token));
        } else {
            AsyncStorage.removeItem('@token');
        }

        if (usuarioId) {
            AsyncStorage.setItem('@id', JSON.stringify(usuarioId));
        } else {
            AsyncStorage.removeItem('@id');
        }
     

    }, [token, usuarioId]);

    const autenticado = !!tokenT;

    async function verificarToken() {
        const iToken = AsyncStorage.getItem('@token');
        if (!iToken) {
            setTokenT(false);
            return;
        }
        const tokenU = JSON.parse(iToken);
        setToken(tokenU);
        try {
            const resposta = await apiLocal.get('/VerificarTokenUsuario', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (resposta.data.id) {
                setTokenT(true);
                setUsuarioId(resposta.data.id);
                AsyncStorage.setItem('@id', JSON.stringify(resposta.data.id));
                AsyncStorage.setItem('@usuario', JSON.stringify(resposta.data.nome));
            }
        } catch (err) {
            console.error("Erro ao verificar token:", err);
            setTokenT(false); 
        }
    }

    async function loginEntrada(email, senha) {
        try {
            const resposta = await apiLocal.post('/LoginUsuarios', {
               email,
                senha
            });
            AsyncStorage.setItem('@id', JSON.stringify(resposta.data.id));
            AsyncStorage.setItem('@token', JSON.stringify(resposta.data.token));
            AsyncStorage.setItem('@nome',JSON.stringify(resposta.data.nome));
            setTokenT(true);
            setUsuarioId(resposta.data.id);
            setListaId(resposta.data.listaId);
        } catch (err) {
            console.error('Erro de Comunicação');
            setTokenT(false); 
        }
    }

    return (
        <AutenticadoContexto.Provider value={{ autenticado, loginEntrada, verificarToken, token, usuarioId }}>
            {children}
        </AutenticadoContexto.Provider>
    );
}