import { Task } from "../../domain/entity/task_entity";
import { TaskRepository } from "../../domain/repository/task_repository";
import { CreateTaskDto } from "../../dto/create_task_dto";
import { TaskModel } from "../model/task_model";

export class TaskRepositoryImpl extends TaskRepository {
  async createTask(dto: CreateTaskDto): Promise<Task> {
    const task = new TaskModel({ ...dto });
    await task.save();
    return task.toObject();
  }
  getTaskById(): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  getTasksByColumnId(): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  getAllTasks(): Promise<Task[]> {
    throw new Error("Method not implemented.");
  }
  updateTask(): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  deleteTask(): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  moveTaskToColumn(): Promise<Task> {
    throw new Error("Method not implemented.");
  }
  filterTask(): Promise<Task> {
    throw new Error("Method not implemented.");
  }
}
