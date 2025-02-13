import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'
import { compare } from 'bcryptjs'

interface CadUsuarios {
    nome: string
    cpf: string
    telefone: string
    email: string
    senha: string

}
interface AlterarUsuarios {
    id: string,
    nome: string,
    email: string
}

class UsuariosServices {

    

    async apagarUsuarios(id: string){
 
        await prismaClient.cadastroUsuarios.delete({
    
            where:{
    
                id:id
            }
        })
    
        return ({dados: 'Registro Apagado com sucesso!'});
    }

    async cadastrar_usuarios({ nome, cpf, telefone, email, senha }: CadUsuarios) {

        const cpfExiste = await prismaClient.cadastroUsuarios.findFirst({
            where: {
                email: email,
                cpf: cpf
            }
        })

        if (cpfExiste) {
            throw new Error('cpf já esta cadastrado')

        } else{

            const passCrypt = await hash(senha, 8)

            await prismaClient.cadastroUsuarios.create({
                data: {
                    nome: nome,
                    cpf: cpf,
                    telefone: telefone,
                    email: email,
                    senha: passCrypt
    
                }
            })
            return ({ dados: 'Cadastro Efetuado com Sucesso' })
        }
    }
    async consultar_usuarios() {
        const resposta = await prismaClient.cadastroUsuarios.findMany({
            select: {
                id: true,
                nome: true,
                cpf: true,
                email: true
            }
            
            

        })
        return resposta
    }

    async alterarDadosUsuarios({ id, nome, email }: AlterarUsuarios) {
        await prismaClient.cadastroUsuarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email
            }
        })
        return ({ dados: 'Cadastro Alterado Com Sucesso' })
    }

    async consultarUsuariosUnico(id: string) {
        const resposta = await prismaClient.cadastroUsuarios.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                senha: true
            }
        })
        return resposta
    }


    

}

export { UsuariosServices }