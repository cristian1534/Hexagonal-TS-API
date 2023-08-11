import { Request, Response } from "express";
import { TodoUseCase } from "../../application/todoUseCase";

export class TodoController {
  constructor(private todoUseCase: TodoUseCase) {}

  public addCtrl = async ({ body }: Request, res: Response) => {
    const task = await this.todoUseCase.addTodo(body);
    res.send({ task });
  };

  public getCtrl = async (req: Request, res: Response) => {
    const taskList = await this.todoUseCase.getTodo();
    res.send(taskList);
  };
}
