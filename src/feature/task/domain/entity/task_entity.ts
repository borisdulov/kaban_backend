import { Types } from "mongoose";
import { Column } from "../../../column/domain/entity/column_entity";
import { User } from "../../../user/domain/entity/user_entity";
import { TaskPriority } from "./task_priority_enum";

export interface Task {
  _id: String;
  title: String;
  description: String;
  columnId: String;
  column: Column;
  userIds: String[];
  users: User[];
  creatorId: String;
  creator: User;
  isCompleted: Boolean;
  taskPriority: TaskPriority;
  dueDate: Date;
}
