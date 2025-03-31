import e from "cors";
import prismaClient from "../../prisma";

interface FazerReserva{
    nome: string
    email: string
    idExcursao: string
    idUsuario: string
}

class ReservaService {
    async fazer_reserva ({nome, email, idExcursao, idUsuario}: FazerReserva){
        const resposta = await prismaClient.fazerReserva.create({
            data:{
             nome: nome,
             email: email,
             idExcursao: idExcursao,
             idUsuario: idUsuario
            }
        })
        return ({dados: 'Reserva Concluida'})
    }
    async consultar_reserva(){
        const resposta = await prismaClient.fazerReserva.findMany({
            select: {
                nome: true
            }
        })
        return resposta
    }

}

export { ReservaService}