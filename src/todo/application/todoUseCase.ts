import { TodoRepository } from "../domain/todo.repository";
import { TodoValue } from "../domain/todo.value";

export class TodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  public async addTodo({ task, active }: { task: string; active: boolean }) {
    const todoValue = new TodoValue({ task, active });
    const todoCreated = await this.todoRepository.addTodo(todoValue);
    return todoCreated;
  }

  public async getTodo() {
    const todoList = await this.todoRepository.getTodo();
    return todoList;
  }

  public async removeTodo(id: string) {
    const deletedTodo = await this.todoRepository.deleteTodo(id);
    return deletedTodo;
  }

  public async updateTodo(id: string, updatedData: Partial<TodoValue>) {
    const updatedTodo = await this.todoRepository.updateTodo(id, updatedData);
    return updatedTodo;
  }
}
