import React, { useContext } from 'react';
import { AutenticadoContexto } from '../Context/authContexts'

import NoAuth from './noAuth.routes';
import Auth from './auth.routes';

export default function Rotas() {
    const { autenticado } = useContext(AutenticadoContexto);
    // const autenticado = true;

    return (
        autenticado === true ? <Auth /> : <NoAuth />
    );
};