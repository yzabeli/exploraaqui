import { createContext, useState } from "react";
import apiLocal from "../Api";

 
export const AutenticadoContexto =  createContext();    
 
export default function AuthProvider({children}){
 
    const [tokenT, setTokenT] = useState(false);
    const [token, setToken] = useState('');
 
    const autenticado = !!tokenT;
 

    async function verificarToken() {
        const iToken = localStorage.getItem('@token')
        if (!iToken) {
            setTokenT(false)
            return
        }
        const tokenU = JSON.parse(iToken)
        setToken(tokenU)
        try {
            const resposta = await apiLocal.get('/VerificarTokenUsuario', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (resposta.data.id) {
                setTokenT(true)
                localStorage.setItem('@id', JSON.stringify(resposta.data.id))
                localStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
            }
        } catch (err) {
 
        }
    }
 
    async function loginEntrada(email,senha){
 
        try {
       
            const resposta = await apiLocal.post('/loginUsuarios',{
 
                email,
                senha
            });
            
 
            localStorage.setItem('@id',JSON.stringify(resposta.data.id));
            localStorage.setItem('@nome',JSON.stringify(resposta.data.nome));
            localStorage.setItem('@token',JSON.stringify(resposta.data.token));
 
            setTokenT(true)
           
 
        } catch (err) {
           
            alert(err.response.data.error)
 
        }
 
    }
 
   
 
    return(
 
        <AutenticadoContexto.Provider value={({autenticado, loginEntrada, verificarToken, token})}>
 
            {children}
 
        </AutenticadoContexto.Provider>
    )
}