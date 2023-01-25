import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/userRoutes";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/user', userRouter);

export {app};