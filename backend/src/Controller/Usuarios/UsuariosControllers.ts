import { Request, Response } from "express";

import { LoginServices } from "../../services/LoginUsuarios/LoginServices";
import { UsuariosServices } from "../../services/Usuarios/UsuariosService";

class UsuariosControllers {
  async cadastro_Usuarios(req: Request, res: Response) {
    const { nome, cpf, telefone, email, senha, } = req.body
    const usuariosService = new UsuariosServices()
    const resposta = await usuariosService.cadastrar_usuarios({
      nome,
      cpf,
      telefone,
      email,
      senha

    })
    return res.json(resposta)
  }

  async consultar_usuarios(req: Request, res: Response) {
    const usuariosService = new UsuariosServices()
    const resposta = await usuariosService.consultar_usuarios()
    return res.json(resposta)
  }

  async apagarUsuarios(req: Request, res: Response) {

    const { id } = req.params;
    const deletarUsuarios = new UsuariosServices();
    const resposta = await deletarUsuarios.apagarUsuarios(id);

    return res.json(resposta);

  }

  async alterarDadosUsuarios(req: Request, res: Response) {
    const { id, nome, email } = req.body
    const enviarDadosServices = new UsuariosServices()
    const resposta = await enviarDadosServices.alterarDadosUsuarios({
      id,
      nome,
      email
    })
    return res.json(resposta)
  }



  async consultarUsuariosUnico(req: Request, res: Response) {
    const { id } = req.body
    const enviarDadosServices = new UsuariosServices()
    const resposta = await enviarDadosServices.consultarUsuariosUnico(id)
    return res.json(resposta)
  }



}

export { UsuariosControllers }