import prismaClient from "../../prisma";


interface CadExcursoes{
    nome: string
    descricao: string
    dia: string
    local: string
    preco: string
    disponibilidade: string
    banner: string
}

class ExcursoesServices {
    async adicionar_excursoes ({nome, descricao, dia, local, preco, disponibilidade, banner}: CadExcursoes)
    {
     const resposta = await prismaClient.cadExcursoes.create({
        data:{
            nome: nome,
            descricao: descricao,
            dia: dia,
            local: local,
            preco: preco,
            disponibilidade: disponibilidade,
            banner: banner
        }
     })
     return ({dados: 'Excursão Adicionada com Sucesso'})
    }
    async consultar_excursoes(){
    const resposta = await prismaClient.cadExcursoes.findMany({
        select: {
            nome: true,
            descricao: true,
            dia: true,
            preco: true,
            banner: true
        }
    })
    return resposta
}
async listarExcursao(){
    const resposta = await prismaClient.cadExcursoes.findMany()
    return resposta
}





}

export { ExcursoesServices}