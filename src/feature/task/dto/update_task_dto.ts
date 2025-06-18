import { TaskPriority } from "../domain/entity/task_priority_enum";

export interface UpdateTaskDto {
  taskId: String;
  title?: String;
  description?: String;
  isCompleted?: Boolean;
  taskPriority?: TaskPriority;
}
