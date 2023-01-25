import { Request, Response } from "express";
import { SessionService } from "../services/SessionService";

class SessionController {
    async create (req: Request, res: Response) {
        const { email, password } = req.body;

        const sessionService = new SessionService();

        try {
            const token = await sessionService.create(email, password);
            return res.json(token);
        } catch (error: any) {
            return res.status(401).json({message: error.message})
        }
    }
}

export { SessionController } 