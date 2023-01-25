import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/userRoutes";
import { authRouter } from "./routes/authRoutes";
import { linkRouter } from "./routes/linkRoutes";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', userRouter);
app.use('/api/login', authRouter);
app.use('/api/link', linkRouter);

export {app};