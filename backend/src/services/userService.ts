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

        const userExists = await prisma.user.findUnique({
            where: {username}
        });

        if (userExists) {
            throw new Error("Usuário já existe");
        }
        
        if (password !== confirmPassword) {
            throw new Error("Senhas não são iguais");
        }

        const passwordHash = hashSync(password, 10);

        const user = await prisma.user.create({
            data: { username, email, password: passwordHash }
        });

        return user;
    }

    async update(
        username: string,
        newUsername?: string,
        email?: string,
        password?: string,
        image_url?: string,
        instagram_url?: string,
        linkedin_url?: string,
        facebook_url?: string
    ) {
        const schema = yup.object().shape({
            newUsername: yup.string(),
            email: yup.string().email("Email is not valid"),
            password: yup.string().min(8, "A senha deve ter mais de 8 caracteres"),
            image_url: yup.string().url("A url da imagem de perfil não é valida"),
            instagram_url: yup.string().url("A url do Instagram não é valida"),
            linkedin_url: yup.string().url("A url do LinkedIn não é valida"),
            facebook_url: yup.string().url("A url do Facebook não é valida")
        });

        await schema.validate({ newUsername, email, password, image_url, instagram_url, linkedin_url, facebook_url });
        
        const userExists = await prisma.user.findUnique({
            where: {username: username}
        });

        if (!userExists) {
            throw new Error("User does not exists");
        }

        if (newUsername && newUsername !== username) {
            const usernameExists = await prisma.user.findUnique({
                where: {username: newUsername}
            });
            
            if (usernameExists) {
                throw new Error("Nome de usuário já está em uso");
            }
        }

        let newData = {};

        
        if (password) {
            const passwordHash = hashSync(password, 10);
            
            newData = { 
                username: newUsername,
                email,
                password: passwordHash,
                image_url,
                instagram_url,
                linkedin_url,
                facebook_url
            };
        } else {
            newData = { 
                username: newUsername,
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