import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { AuthMiddleware } from "../middlewares/authMiddleware";

const router = Router();

const userController = new UserController();

router.get('/:username', userController.getUserData);
router.post('/', userController.create);
router.patch('/:username', userController.update);
router.delete('/:username', userController.delete);

export { router as userRouter };