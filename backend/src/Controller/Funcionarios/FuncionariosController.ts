import { Request, Response } from "express";
import { FuncionariosService } from "../../services/Funcionarios/FuncionariosService";

class FuncionariosControllers{
    async cadastro_Funcionarios(req: Request, res: Response){
        const {nome,cpf, telefone, email, idHierarquia } = req.body
       const funcionariosService = new FuncionariosService()
       const resposta = await funcionariosService.cadastrar_funcionarios({
        nome,
        cpf,
        telefone,
        email,
        idHierarquia
       
       })
       return res.json(resposta)
    }
    async consultar_usuarios(req: Request, res: Response){
        const funcionariosService = new FuncionariosService()
        const resposta = await funcionariosService.consultar_funcionarios()
        return res.json(resposta)
    }
}

export {FuncionariosControllers}