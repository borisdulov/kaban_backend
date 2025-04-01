import mongoose, { Schema } from "mongoose";
import { Task } from "../../domain/entity/task_entity";
import { SchemaTitle } from "../../../../core/constant/schema_title";
import { TaskPriority } from "../../domain/entity/task_priority_enum";

const TaskSchema = new Schema<Task>(
  {
    title: { type: String },
    description: { type: String },
    tagId: { type: String },
    columnId: {
      type: Schema.Types.ObjectId,
      ref: SchemaTitle.column,
      required: true,
    },
    columnList: [
      {
        type: Schema.Types.ObjectId,
        ref: SchemaTitle.column,
        required: true,
      },
    ],
    userIds: [
      {
        type: Schema.Types.ObjectId,
        ref: SchemaTitle.user,
        required: true,
      },
    ],
    userList: [
      {
        type: Schema.Types.ObjectId,
        ref: SchemaTitle.user,
        required: true,
      },
    ],
    isCompleted: { type: Boolean },
    taskPriority: {
      type: String,
      enum: Object.values(TaskPriority),
      default: TaskPriority.None,
    },
    dueDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

TaskSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export const TaskModel = mongoose.model(SchemaTitle.board, TaskSchema);
