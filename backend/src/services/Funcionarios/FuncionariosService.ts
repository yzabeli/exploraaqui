import prismaClient from "../../prisma";


interface CadFuncionarios{
    nome: string
    cpf: string
    telefone: string
    email: string
    idHierarquia: string
}

class FuncionariosService {
    async cadastrar_funcionarios ({nome, cpf, email, telefone, idHierarquia}: CadFuncionarios){
        const resposta = await prismaClient.cadastroFuncionarios.create
        ({
            data:{
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                email:  email,
                idHierarquia: idHierarquia
            }
        })
        return ({dados: 'Funcionarío Cadastrado'})
    }
    async consultar_funcionarios(){
        const resposta = await prismaClient.cadastroFuncionarios.findMany({
            select: {
                nome: true,
                cpf: true,
                email: true,
                telefone: true
            }
            
        })
        return resposta
    }
}

export {FuncionariosService}