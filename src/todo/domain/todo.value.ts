import { v4 as uuid } from "uuid";
import { TodoEntity } from "./todo.entity";

export class TodoValue implements TodoEntity {
  uuid: string;
  task: string;
  active: boolean;

  constructor({ task, active }: { task: string; active: boolean }) {
    this.uuid = uuid();
    this.task = task;
    this.active = active;
  }
}
