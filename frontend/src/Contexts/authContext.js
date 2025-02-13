import { createContext, useState } from "react";
import apiLocal from "../Api";

 
export const AutenticadoContexto =  createContext();    
 
export default function AuthProvider({children}){
 
    const [tokenT, setTokenT] = useState(false);
    const [token, setToken] = useState('');
 
    const autenticado = !!tokenT;
 
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
 
        <AutenticadoContexto.Provider value={({autenticado, loginEntrada})}>
 
            {children}
 
        </AutenticadoContexto.Provider>
    )
}