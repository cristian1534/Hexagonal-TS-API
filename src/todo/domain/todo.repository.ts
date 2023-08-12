import { TodoEntity } from "./todo.entity";

export interface TodoRepository {
  addTodo(task: TodoEntity): Promise<TodoEntity | null>;
  getTodo(): Promise<TodoEntity[] | null>;
  deleteTodo(id: string): Promise<TodoEntity | null>;
  updateTodo(id: string, updatedData: Partial<TodoEntity>): Promise<TodoEntity | null>;
}
