import prismaClient from "../../prisma";

interface FazerReserva{
    data: string
    idExcursao: string
    idUsuario: string
}

class ReservaService {
    async fazer_reserva ({data, idExcursao, idUsuario}: FazerReserva){
        const resposta = await prismaClient.fazerReserva.create({
            data:{
             data: data,
             idExcursao: idExcursao,
             idUsuario: idUsuario
            }
        })
        return ({dados: 'Reserva Concluida'})
    }
    async consultar_reserva(){
        const resposta = await prismaClient.fazerReserva.findMany({
            select: {
                data: true
            }
        })
        return resposta
    }

}

export { ReservaService}