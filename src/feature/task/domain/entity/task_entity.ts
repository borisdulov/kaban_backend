import { Types } from "mongoose";
import { Column } from "../../../column/domain/entity/column_entity";
import { User } from "../../../user/domain/entity/user_entity";
import { TaskPriority } from "./task_priority_enum";

export interface Task {
  _id: String;
  title: String;
  description: String;
  columnId: Types.ObjectId | Column;
  userIds: Types.ObjectId[] | User[];
  isCompleted: Boolean;
  taskPriority: TaskPriority;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
