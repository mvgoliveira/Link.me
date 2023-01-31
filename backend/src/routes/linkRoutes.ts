import { Router } from "express";
import { LinkController } from "../controllers/linkController";
import { AuthMiddleware } from "../middlewares/authMiddleware";

const router = Router();

const linkController = new LinkController();

router.get('/:username', linkController.getFromUser);
router.post('/:username', AuthMiddleware, linkController.create);
router.patch('/:username/:linkId', AuthMiddleware, linkController.update);
router.delete('/:username/:linkId', AuthMiddleware, linkController.delete);

export { router as linkRouter };