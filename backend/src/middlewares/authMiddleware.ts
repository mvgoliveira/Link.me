import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

function AuthMiddleware (req: Request, res: Response, next: NextFunction) {
    const { username } = req.params;
    
    const authHeader = req.header('authorization');

    if (!authHeader) {
        return res.status(401).json({ error: "Token not provided" });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).json({ error: "Invalid token" });
    }

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ error: "Malformed token" });
    }
    
    try {
        const user: any = jwt.verify(token, process.env.TOKEN_SECRET as string);

        if (user.username !== username) {
            return res.status(401).json({ error: "Forbidden: you don't have permission" });
        }

        return next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" })
    }
}

export {AuthMiddleware}