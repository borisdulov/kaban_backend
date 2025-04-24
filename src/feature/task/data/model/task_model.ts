import mongoose, { Schema } from "mongoose";
import { Task } from "../../domain/entity/task_entity";
import { SchemaTitle } from "../../../../core/constant/schema_title";
import { TaskPriority } from "../../domain/entity/task_priority_enum";

const TaskSchema = new Schema<Task>({
  title: { type: String },
  description: { type: String },
  columnId: {
    type: String,
    required: true,
  },
  column: {
    type: Schema.Types.ObjectId,
    ref: SchemaTitle.column,
    required: true,
  },
  userIds: [
    {
      type: String,
      required: true,
    },
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: SchemaTitle.user,
      required: true,
    },
  ],
  creatorId: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: SchemaTitle.column,
    required: true,
  },
  isCompleted: { type: Boolean },
  taskPriority: {
    type: String,
    enum: Object.values(TaskPriority),
    default: TaskPriority.None,
  },
  dueDate: { type: Date },
});

export const TaskModel = mongoose.model(SchemaTitle.task, TaskSchema);
