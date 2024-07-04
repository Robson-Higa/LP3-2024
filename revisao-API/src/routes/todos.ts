import { Router } from "express";
import TodoController from "../controllers/TodoController";

export const todosRouter = Router();

const todoCtrl = new TodoController();

todosRouter.post("/", (req, res) => todoCtrl.save(req, res));