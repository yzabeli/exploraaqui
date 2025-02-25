import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cabecalho from '../Components/Cabecalho';
import Inicio from '../Inicio'
import Rodape from '../Components/Rodape';
import Reserva from '../Inicio/Reserva';

import CadastrarUsuarios from '../CadastrarUsuario/CadastrarUsuario'


export default function NaoAutenticados() {
    return (
        <BrowserRouter>
        <Cabecalho/>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/CadastrarUsuario' element={<CadastrarUsuarios/>} />
                <Route path='/Reserva' element={< Reserva />} />
               
                <Route path='*' element={<Inicio />} />
            </Routes>
            <Rodape/>
        </BrowserRouter >
    )
}
