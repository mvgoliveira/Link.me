import { prisma } from "../database/prismaClient";
import * as yup from "yup";
import { hashSync } from "bcryptjs";

class UserService {
    async getUserData(username: string) {
        const user = await prisma.user.findUnique({ 
            where: { username },
            select: { username: true, email: true, image_url: true }
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
            password: yup.string().min(8, "Password must be greater than 8 characters"),
            image_url: yup.string().min(1, "Image url cannot be empty").url("Image url is not valid"),
            instagram_url: yup.string().min(1, "Instagram url cannot be empty").url("Instagram url is not valid"),
            linkedin_url: yup.string().min(1, "LinkedIn url cannot be empty").url("LinkedIn url is not valid"),
            facebook_url: yup.string().min(1, "Facebook url cannot be empty").url("Facebook url is not valid")
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
                throw new Error("username already in use");
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
            throw new Error("User does not exists");
        }

        const deleteUser = await prisma.user.delete({
            where: { username },
            select: { username: true, email: true, image_url: true }
        });

        return deleteUser;
    }
}

export {UserService};