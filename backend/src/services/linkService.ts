import { prisma } from "../database/prismaClient";
import * as yup from "yup";

class LinkService {
    async getFromUser(username: string) {
        const user = await prisma.user.findUnique({
            where: {username},
            select: {username: true}
        });

        if (!user) {
            throw new Error("User does not exists");
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
            title: yup.string().min(1, "Title cannot be empty"),
            url: yup.string().url("Url is not valid").min(1, "Url cannot be empty"),
        });

        await schema.validate({ title, url });

        const user = await prisma.user.findUnique({
            where: {username},
            select: {username: true}
        });

        if (!user) {
            throw new Error("User does not exists");
        }

        const link = await prisma.link.create({ 
            data: {title, url, username}
        });

        return link;
    }

    async update(username: string, linkId: string, title: string, url: string) {
        const schema = yup.object().shape({
            title: yup.string().min(1, "Title cannot be empty"),
            url: yup.string().min(1, "Url cannot be empty").url("Url is not valid"),
        });

        await schema.validate({ title, url });

        const linkExists = await prisma.link.findUnique({
            where: {id: linkId}
        });

        if (!linkExists) {
            throw new Error("Link does not exists");
        }

        if (linkExists.username !== username) {
            throw new Error("Forbidden: you don't have permission");
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
            throw new Error("Link does not exists");
        }

        if (linkExists.username !== username) {
            throw new Error("Forbidden: you don't have permission");
        }

        const link = prisma.link.delete({
            where: { id: linkId },
            select: { username: true, id: true, title: true, url: true }
        });

        return link;
    }
}

export {LinkService}