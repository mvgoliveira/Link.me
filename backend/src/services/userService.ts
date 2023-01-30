import { prisma } from "../database/prismaClient";
import * as yup from "yup";
import { hashSync } from "bcryptjs";

class UserService {
    async getUserData(username: string) {
        const user = await prisma.user.findUnique({ 
            where: { username },
            select: { 
                username: true,
                email: true,
                image_url: true,
                instagram_url: true,
                linkedin_url: true,
                facebook_url: true 
            }
        });

        if (!user) {
            throw new Error("Usuário não existe");
        }

        return user;
    }

    async create(username: string, email: string, password: string, confirmPassword: string) {
        const schema = yup.object().shape({
            username: yup.string().required("Preencha o campo nome"),
            email: yup.string().email("Email não é válido").required("Preencha o campo email"),
            password: yup.string().min(8, "A senha deve ter mais de 8 caracteres").required("Preencha o campo senha"),
            confirmPassword: yup.string().min(8, "a senha deve ter mais de 8 caracteres").required("Preencha o campo confirmar senha")
        });

        await schema.validate({ username, email, password, confirmPassword });

        if (/\s/g.test(username)) {
            throw new Error("Nome de usuário não pode conter espaços");
        }
        
        const userExists = await prisma.user.findFirst({
            where: {OR: [{username}, {email}]}
        });

        if (userExists && userExists.username === username) {
            throw new Error("Nome de usuário já está em uso");
        }
        
        if (userExists && userExists.email === email) {
            throw new Error("Email já está em uso");
        }
        
        if (password !== confirmPassword) {
            throw new Error("Senha e confirmação de senha não conferem");
        }

        const passwordHash = hashSync(password, 10);

        const image_url = `https://api.dicebear.com/5.x/thumbs/png?seed=${username}&backgroundColor=5F32E8&shapeColor=472BC5,2E1A68,462B9B`;

        const user = await prisma.user.create({
            data: { username, email, password: passwordHash, image_url }
        });

        return user;
    }

    async update(
        username: string,
        email?: string,
        password?: string,
        confirmPassword?: string,
        image_url?: string,
        instagram_url?: string,
        linkedin_url?: string,
        facebook_url?: string
    ) {
        const schema = yup.object().shape({
            email: yup.string().email("Email is not valid"),
            password: yup.string().min(8, "A senha deve ter mais de 8 caracteres"),
            confirmPassword: yup.string().min(8, "a senha deve ter mais de 8 caracteres"),
            image_url: yup.string().url("A url da imagem de perfil não é valida"),
            instagram_url: yup.string().url("A url do Instagram não é valida"),
            linkedin_url: yup.string().url("A url do LinkedIn não é valida"),
            facebook_url: yup.string().url("A url do Facebook não é valida")
        });

        await schema.validate({
            email,
            password,
            confirmPassword,
            image_url,
            instagram_url,
            linkedin_url,
            facebook_url
        });
        
        let userExists = await prisma.user.findUnique({
            where: { username }
        });

        if (!userExists) {
            throw new Error("Usuário não existe");
        }

        userExists = await prisma.user.findUnique({
            where: { email }
        })

        if (userExists?.email === email) {
            throw new Error("Email já cadastrado");
        }

        let newData = {};
        
        if (password) {
            if (password !== confirmPassword) {
                throw new Error("Senha e confirmação de senha não conferem");
            }

            const passwordHash = hashSync(password, 10);
            
            newData = { 
                email,
                password: passwordHash,
                image_url,
                instagram_url,
                linkedin_url,
                facebook_url
            };
        } else {
            newData = { 
                email,
                image_url,
                instagram_url,
                linkedin_url,
                facebook_url
            };
        }
        
        const user = await prisma.user.update({
            where: { username: username },
            data: newData,
            select: { 
                username: true,
                email: true,
                image_url: true,
                instagram_url: true,
                linkedin_url: true,
                facebook_url: true
            }
        });

        return user;
    }

    async delete(username: string) {
        const userExists = await prisma.user.findUnique({
            where: {username: username}
        });

        if (!userExists) {
            throw new Error("Usuário não existe");
        }

        const deleteUser = await prisma.user.delete({
            where: { username },
            select: { username: true, email: true, image_url: true }
        });

        return deleteUser;
    }
}

export {UserService};