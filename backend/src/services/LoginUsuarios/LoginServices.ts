import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface Login {
    email: string,
    senha: string
}

class LoginServices {
    async loginUsuarios({ email, senha }: Login) {
        const usuario = await prismaClient.cadastroUsuarios.findFirst({
            where: {
                email: email
            }
        })

        if (!usuario) {
            throw new Error('Usuario ou Senha Incorretos')
        }
        const senhaCrypt = await compare(senha, usuario.senha)
        if (!senhaCrypt) {
            throw new Error('Usuario ou Senha Incorretos')
        }

        const token = sign({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        },
            process.env.JWT_SECRETO,
            {
                subject: usuario.id,
                expiresIn: '8h'
            }
        )

        console.log(usuario)
           
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            token: token
        }
    }

    async verificaToken(id: string){
        const resposta = await prismaClient.cadastroUsuarios.findFirst({
            where: {
                id: id
            },
            select: {
                id: true
            }
        })
    }
    
}

export { LoginServices }