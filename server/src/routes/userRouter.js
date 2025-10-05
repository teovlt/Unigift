import { Router } from "express";
import { getUsers } from "../controllers/userController.js";

export const userRouter = Router();

userRouter.get("/", getUsers);  