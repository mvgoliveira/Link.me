import { Request, Response } from "express";
import { LinkService } from "../services/LinkService";

class LinkController {
    async getFromUser(req: Request, res: Response) {
        const { username } = req.params;

        const linkService = new LinkService();
        
        try {
            const links = await linkService.getFromUser(username);
            
            return res.json(links);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    async create(req: Request, res: Response) {
        const { username } = req.params;
        const { title, url } = req.body;

        const linkService = new LinkService();

        try {
            const link = await linkService.create(username, title, url);

            return res.json(link);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    async update(req: Request, res: Response) {
        const { username, linkId } = req.params;
        const { title, url } = req.body;

        const linkService = new LinkService();

        try {
            const link = await linkService.update(username, linkId, title, url);

            return res.json(link);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        const { username, linkId } = req.params;

        const linkService = new LinkService();

        try {
            const link = await linkService.delete(username, linkId);

            return res.json(link);
        } catch (error: any) {
            return res.status(400).json({ message: error.message });
        }
    }
}

export {LinkController}