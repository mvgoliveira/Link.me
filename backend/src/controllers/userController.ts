import { Request, Response } from "express";
import { UserService } from "../services/UserService";

class UserController {
    async getUserData(req: Request, res: Response) {
        const { username } = req.params;

        const userService = new UserService();

        try {
            const user = await userService.getUserData(username);

            return res.json(user)
        } catch (error: any) {
            return res.status(400).json({message: error.message});
        }
    }

    async create(req: Request, res: Response) {
        const {username, email, password, confirmPassword} = req.body;
        
        const userService = new UserService();

        try {
            const user = await userService.create(
                username,
                email,
                password,
                confirmPassword
            );

            return res.json(user)
        } catch (error: any) {
            return res.status(400).json({message: error.message});
        }
    }

    async update(req: Request, res: Response) {
        const {username} = req.params;
        
        const {
            username: newUsername,
            email,
            password,
            confirmPassword,
            image_url,
            instagram_url,
            linkedin_url,
            facebook_url
        } = req.body;
        
        const userService = new UserService();

        try {
            const user = await userService.update(
                username,
                email,
                password,
                confirmPassword,
                image_url,
                instagram_url,
                linkedin_url,
                facebook_url
            );

            return res.json(user)
        } catch (error: any) {
            return res.status(400).json({message: error.message});
        }
    }

    async delete(req: Request, res: Response) {
        const {username} = req.params;
        
        const userService = new UserService();

        try {
            const deleteUser = await userService.delete(username);

            return res.json(deleteUser);
        } catch (error: any) {
            return res.status(400).json({message: error.message});
        }
    }
}

export { UserController };