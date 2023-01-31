import { Router } from "express";
import { UserController } from "../controllers/userController";
import { AuthMiddleware } from "../middlewares/authMiddleware";

const router = Router();

const userController = new UserController();

router.get('/:username', userController.getUserData);
router.post('/', userController.create);
router.patch('/:username', AuthMiddleware, userController.update);
router.delete('/:username', AuthMiddleware, userController.delete);

export { router as userRouter };