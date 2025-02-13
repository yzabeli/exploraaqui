import React from "react";
import { useContext } from "react";
import { AutenticadoContexto} from "../Contexts/authContext";


import NaoAutenticados from '../Router/NaoAutenticados.routes';
import Autenticados from "./Autenticados.routes";

export default function Rotas(){

    const {autenticado} = useContext(AutenticadoContexto);

    return(
        
        autenticado === true ? <Autenticados /> : <NaoAutenticados/>
        
    )
}

