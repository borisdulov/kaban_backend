import { Dependency } from "../../../../core/domain/entity/dependency";
import { CreateTaskDto } from "../../dto/create_task_dto";
import { FilterTaskDTO } from "../../dto/filter_task_dto";
import { UpdateTaskDto } from "../../dto/update_task_dto";
import { Task } from "../entity/task_entity";

export abstract class TaskRepository extends Dependency {
  abstract createTask(dto: CreateTaskDto): Promise<Task>;
  abstract getTaskById(taskId: string): Promise<Task>;
  abstract updateTask(dto: UpdateTaskDto): Promise<Task>;
  abstract deleteTask(taskId: string): Promise<Task>;
  abstract moveTaskToColumn(taskId: string, newColumnId: string): Promise<Task>;
}
