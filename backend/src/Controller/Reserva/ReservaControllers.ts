import { Request, Response } from "express";
import { ReservaService } from "../../services/Reserva/ReservaServices";

class ReservaControllers{
    async fazer_Reserva(req: Request, res: Response){
        const { nome, email, idExcursao, idUsuario } = req.body
        const reservaServices = new ReservaService()
        const resposta = await reservaServices.fazer_reserva({
          nome,
          email,
          idExcursao,
          idUsuario
        })
        return res.json(resposta)
    }
    async consultar_reserva(req: Request, res: Response){
        const reservaServices = new ReservaService()
        const resposta = await reservaServices.consultar_reserva()
        return res.json(resposta)
    }
    
}
export { ReservaControllers }