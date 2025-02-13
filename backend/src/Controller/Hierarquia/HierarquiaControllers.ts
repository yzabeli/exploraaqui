import { Request, Response } from "express";
import { HierarquiaService } from "../../services/Hierarquia/HierarquiaServices";

class HierarquiaControllers{
    async cadastrarHierarquia(req: Request, res: Response){
        const { nome, descricao } = req.body
        const hierarquiaServices = new HierarquiaService()
        const resposta = await hierarquiaServices.cadastrarHierarquia({
           nome, 
           descricao 
        })
        return res.json(resposta)
    }
    async listarHierarquias(req: Request, res: Response){
        const enviarDadosServices = new HierarquiaService()
        const resposta = await enviarDadosServices.listarHierarquias()
        return res.json(resposta)
    }
}
export {HierarquiaControllers}