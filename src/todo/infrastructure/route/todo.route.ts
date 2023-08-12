import { Router } from "express";
import { MongoRepository } from "../../infrastructure/repository/mongo.repository";
import { TodoUseCase } from "../../application/todoUseCase";
import { TodoController } from "../../infrastructure/controller/todo.ctrl";

const route = Router();

const todoRepository = new MongoRepository();
const todoUseCase = new TodoUseCase(todoRepository);
const todoCtrl = new TodoController(todoUseCase);

route.post("/task", todoCtrl.addCtrl);
route.get("/task", todoCtrl.getCtrl);
route.delete("/task/:id", todoCtrl.deleteCtrl);
route.put("/task/:id", todoCtrl.updateCtrl);

export default route;
