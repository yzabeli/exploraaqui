import prismaClient from "../../prisma";

interface CadHierarquia{
    nome: string
    descricao: string
}

class HierarquiaService {
    async cadastrarHierarquia ({nome, descricao}: CadHierarquia){
      await prismaClient.cadastroHierarquia.create({
        data: {
            nome: nome,
            descricao: descricao
        }
      })
      return ({ dados: 'cadastro efetuado com sucesso'})
    }
    async listarHierarquias(){
        const resposta = await prismaClient.cadastroHierarquia.findMany()
        return resposta
    }

}

export { HierarquiaService}