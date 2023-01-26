import { prisma } from "../database/prismaClient";
import * as yup from "yup";

class LinkService {
    async getFromUser(username: string) {
        const user = await prisma.user.findUnique({
            where: {username},
            select: {username: true}
        });

        if (!user) {
            throw new Error("Usuário não existe");
        }

        const links = await prisma.link.findMany({
            where: { username },
            select: {id: true, title: true, url: true},
            orderBy: [{ createdAt: 'desc' }]
        });

        return links;
    }

    async create(username: string, title: string, url: string) {
        const schema = yup.object().shape({
            title: yup.string().required("Preencha o campo título").min(3, "O título deve ter mais de 3 caracteres"),
            url: yup.string().required("Preencha o campo url").url("Url não é válida").min(3, "A url deve ter mais de 3 caracteres"),
        });

        await schema.validate({ title, url });

        const user = await prisma.user.findUnique({
            where: {username},
            select: {username: true}
        });

        if (!user) {
            throw new Error("Usuário não existe");
        }

        const link = await prisma.link.create({ 
            data: {title, url, username}
        });

        return link;
    }

    async update(username: string, linkId: string, title: string, url: string) {
        const schema = yup.object().shape({
            title: yup.string().min(3, "O título deve ter mais de 3 caracteres"),
            url: yup.string().url("Url não é válida").min(3, "A url deve ter mais de 3 caracteres"),
        });

        await schema.validate({ title, url });

        const linkExists = await prisma.link.findUnique({
            where: {id: linkId}
        });

        if (!linkExists) {
            throw new Error("Link não existe");
        }

        if (linkExists.username !== username) {
            throw new Error("Acesso negado: você não possui permissão");
        }

        const link = await prisma.link.update({
            where: {id: linkId},
            data: {title, url},
            select: {id: true, username: true, title: true, url: true}
        });

        return link;
    }

    async delete(username: string, linkId: string) {
        const linkExists = await prisma.link.findUnique({
            where: {id: linkId}
        });

        if (!linkExists) {
            throw new Error("Link não existe");
        }

        if (linkExists.username !== username) {
            throw new Error("Acesso negado: você não possui permissão");
        }

        const link = prisma.link.delete({
            where: { id: linkId },
            select: { username: true, id: true, title: true, url: true }
        });

        return link;
    }
}

export {LinkService}