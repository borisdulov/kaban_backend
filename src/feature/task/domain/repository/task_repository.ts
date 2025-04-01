import { Dependency } from "../../../../core/domain/entity/dependency";
import { CreateTaskDto } from "../../dto/create_task_dto";
import { Task } from "../entity/task_entity";

export abstract class TaskRepository extends Dependency {
  abstract createTask(dto: CreateTaskDto): Promise<Task>;
  abstract getTaskById(): Promise<Task>;
  abstract getTasksByColumnId(): Promise<Task>;
  abstract getAllTasks(): Promise<Task[]>;
  abstract updateTask(): Promise<Task>;
  abstract deleteTask(): Promise<Task>;
  abstract moveTaskToColumn(): Promise<Task>;
  abstract filterTask(): Promise<Task>;
}
