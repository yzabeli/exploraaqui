import { Router } from 'express'
import multer from 'multer'
import upLoandConfig from './config/multer'


import { UsuariosControllers } from './Controller/Usuarios/UsuariosControllers'
import { ExcursoesControllers } from './Controller/Excursoes/ExcursoesControllers'
import { FuncionariosControllers } from './Controller/Funcionarios/FuncionariosController' 
import { HierarquiaControllers } from './Controller/Hierarquia/HierarquiaControllers'
import { ReservaControllers } from './Controller/Reserva/ReservaControllers'
import { LoginUsuariosControllers } from './Controller/LoginUsuario/LoginUsuariosControllers'

import { estaAutenticado } from './middleware/estaAutenticado'
const router = Router()
const upload = multer(upLoandConfig.upload('./tmp'))


//usuarios
router.post('/CadastroUsuarios', new UsuariosControllers().cadastro_Usuarios)
router.get('/ConsultarUsuarios', new UsuariosControllers().consultar_usuarios)
router.post('/ConsultarUsuariosUnico', estaAutenticado,  new UsuariosControllers().consultarUsuariosUnico)
router.delete('/ApagarUsuarios/:id', estaAutenticado, new UsuariosControllers().apagarUsuarios)
router.put('/AlterarDadosUsuarios', estaAutenticado, new UsuariosControllers().alterarDadosUsuarios)
//excursoes
router.post('/CadastrarExcursoes', estaAutenticado,  upload.single('file'), new ExcursoesControllers().cadastro_Excursoes)
router.get('/ListarExcursao', new ExcursoesControllers().listarExcursao)
router.get('/ConsultarExcursoes', estaAutenticado, new ExcursoesControllers().consultar_excursoes)
//funcionarios
router.post('/cadastroFuncionarios', estaAutenticado, new FuncionariosControllers().cadastro_Funcionarios)
router.get('/consultarFuncionarios', estaAutenticado, new FuncionariosControllers().consultar_usuarios)
 //hierarquia
 router.post('/CadastrarHierarquia', new HierarquiaControllers().cadastrarHierarquia)
 router.get('/ListarHierarquia', new HierarquiaControllers().listarHierarquias)
 //reserva
 router.post('/FazerReserva', new ReservaControllers().fazer_Reserva)
 router.get('/consultarReserva', new ReservaControllers().consultar_reserva)
 //Roras de Login
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios)
router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken)

export default router