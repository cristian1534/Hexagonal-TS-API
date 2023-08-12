import { Request, Response } from "express";
import { TodoUseCase } from "../../application/todoUseCase";

export class TodoController {
  constructor(private todoUseCase: TodoUseCase) {}

  public addCtrl = async ({ body }: Request, res: Response) => {
    try {
      const task = await this.todoUseCase.addTodo(body);
      res.status(200).send({ task });
    } catch (err) {
      return res.status(500).send("Error adding new TODO");
    }
  };

  public getCtrl = async (req: Request, res: Response) => {
    try {
      const taskList = await this.todoUseCase.getTodo();
      res.status(200).send(taskList);
    } catch (err) {
      return res.status(500).send("Error getting TODOS");
    }
  };

  public deleteCtrl = async ({ params }: Request, res: Response) => {
    try {

      const { id } = params;
      const deletedTodo = await this.todoUseCase.removeTodo(id);
      res.status(200).send(deletedTodo);
    } catch (err) {
      return res.status(500).send("Error deleting TODO");
    }
  };

  public updateCtrl = async (req: Request, res: Response) => {
    try {

      const { id } = req.params;
      const updatedData = req.body;
  
      const updatedTodo = await this.todoUseCase.updateTodo(id, updatedData);
      res.status(200).send(updatedTodo);
    } catch (err) {
      return res.status(500).send("Error updating TODO");
    }
  };
}
