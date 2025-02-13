import prismaClient from "../../prisma";


interface CadExcursoes{
    nome: string
    descricao: string
    data: string
    local: string
    preco: string
    disponibilidade: string
}

class ExcursoesServices {
    async adicionar_excursoes ({nome, descricao, data, local, preco, disponibilidade}: CadExcursoes)
    {
     const resposta = await prismaClient.cadExcursoes.create({
        data:{
            nome: nome,
            descricao: descricao,
            data: data,
            local: local,
            preco: preco,
            disponibilidade: disponibilidade
        }
     })
     return ({dados: 'Excursão Adicionada com Sucesso'})
    }
    async consultar_excursoes(){
    const resposta = await prismaClient.cadExcursoes.findMany({
        select: {
            nome: true,
            descricao: true,
            data: true,
            preco: true
        }
    })
    return resposta
}


}

export { ExcursoesServices}