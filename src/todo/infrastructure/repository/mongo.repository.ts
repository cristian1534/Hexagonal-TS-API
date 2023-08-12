import { TodoEntity } from "../../domain/todo.entity";
import { TodoRepository } from "../../domain/todo.repository";
import TodoModel from "../../infrastructure/model/todo.schema";

export class MongoRepository implements TodoRepository {
  async addTodo(task: TodoEntity): Promise<any> {
    const todo = await TodoModel.create(task);
    return todo;
  }

  async getTodo(): Promise<any> {
    const todoList = await TodoModel.find();
    return todoList;
  }

  async deleteTodo(id: string): Promise<any> {
    const deletedTodo = await TodoModel.findOneAndDelete({ _id: id });
    return deletedTodo;
  }

  async updateTodo(
    id: string,
    updatedData: Partial<TodoEntity>
  ): Promise<any | null> {
    const updatedTodo = await TodoModel.findOneAndUpdate(
      { _id: id },
      updatedData,
      { new: true }
    );
    return updatedTodo;
  }
}
