import { Request, Response } from "express";
import { ExcursoesServices } from "../../services/Excursoes/ExcursoesService";

class ExcursoesControllers{
    async cadastro_Excursoes (req: Request, res: Response){
        const {nome, descricao, data, local, preco, disponibilidade, banner} = req.body
        const excursoesService = new ExcursoesServices()
        const resposta = await excursoesService.adicionar_excursoes({
            nome,
            descricao,
            data,
            local,
            preco,
            disponibilidade,
            banner
        })
        return res.json(resposta)
    }
    async consultar_excursoes(req: Request, res: Response){
        const excursoesService = new ExcursoesServices()
        const resposta = await excursoesService.consultar_excursoes()
        return res.json(resposta)
    }
    
}
export {ExcursoesControllers}