import { Request, Response } from "express";
import { ExcursoesServices } from "../../services/Excursoes/ExcursoesService";

class ExcursoesControllers{
    async cadastro_Excursoes (req: Request, res: Response){
        const {nome, descricao, dia, local, preco, disponibilidade} = req.body
        if(!req.file){
            throw new Error('Imagem com problemas')
        }else{
            const { originalname, filename: banner} = req.file
            const excursoesService = new ExcursoesServices()
            const resposta = await excursoesService.adicionar_excursoes({
                nome,
                descricao,
                dia,
                local,
                preco,
                disponibilidade,
                banner
            })
            return res.json(resposta)

        }
    }
    async consultar_excursoes(req: Request, res: Response){
        const excursoesService = new ExcursoesServices()
        const resposta = await excursoesService.consultar_excursoes()
        return res.json(resposta)
    }
    
}
export {ExcursoesControllers}