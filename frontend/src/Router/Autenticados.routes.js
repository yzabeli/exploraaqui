import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Dashboard from '../Dashboard/index'
import EditarUsuarios from './../EditarUsuarios/index'


    export default function Autenticados(){
        return(
            <BrowserRouter>
            <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/EditarUsuarios/:id' element={< EditarUsuarios />} />
           
            
            
            <Route path='*' element={<Dashboard />} />
            </Routes>
            </BrowserRouter>
        )
    }

                                               