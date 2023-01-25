import { prisma } from "../database/prismaClient";
import * as yup from "yup";
import { hashSync } from "bcryptjs";

class UserService {
    async getUserData(username: string) {
        const user = await prisma.user.findUnique({ 
            where: { username },
            select: { username: true, email: true, imageurl: true }
        });

        if (!user) {
            throw new Error("User does not exists");
        }

        return user;
    }

    async create(username: string, email: string, password: string, confirmPassword: string) {
        const schema = yup.object().shape({
            username: yup.string().required("Name is required"),
            email: yup.string().email("Email is not valid").required("Email is required"),
            password: yup.string().min(8, "password must be greater than 8 characters").required("password is required"),
            confirmPassword: yup.string().min(8, "password must be greater than 8 characters").required("confirm password is required")
        });

        await schema.validate({ username, email, password, confirmPassword });

        const userExists = await prisma.user.findUnique({
            where: {username}
        });

        if (userExists) {
            throw new Error("User already exists");
        }
        
        if (password !== confirmPassword) {
            throw new Error("Password Does not match");
        }

        const passwordHash = hashSync(password, 10);

        const user = await prisma.user.create({
            data: { username, email, password: passwordHash }
        });

        return user;
    }

    async update(username: string, newUsername?: string, email?: string, password?: string, imageurl?: string) {
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
                throw new Error("username already in use");
            }
        }

        let newData = {};

        
        if (password) {
            const passwordHash = hashSync(password, 10);
            newData = { username: newUsername, email, password: passwordHash, imageurl};
        } else {
            newData = { username: newUsername, email, imageurl};
        }
        
        const user = await prisma.user.update({
            where: { username: username },
            data: newData,
            select: { username: true, email: true, imageurl: true }
        });

        return user;
    }

    async delete(username: string) {
        const userExists = await prisma.user.findUnique({
            where: {username: username}
        });

        if (!userExists) {
            throw new Error("User does not exists");
        }

        const deleteUser = await prisma.user.delete({
            where: { username },
            select: { username: true, email: true, imageurl: true }
        });

        return deleteUser;
    }
}

export {UserService};