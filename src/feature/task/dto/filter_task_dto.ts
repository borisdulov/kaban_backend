import { TaskPriority } from "../domain/entity/task_priority_enum";

export interface FilterTaskDTO {
  columnId?: string;
  userIds?: string[];
  taskPriority?: TaskPriority;
  isCompleted?: boolean;
}
