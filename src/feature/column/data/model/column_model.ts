import mongoose, { Schema } from "mongoose";
import { Column } from "../../domain/entity/column_entity";
import { SchemaTitle } from "../../../../core/constant/schema_title";

const ColumnSchema = new Schema<Column>({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  boardId: {
    type: String,
    required: true,
  },
  board: {
    type: Schema.Types.ObjectId,
    ref: SchemaTitle.board,
  },
  tasksId: [
    {
      type: String,
      required: true,
    },
  ],
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Task",
      required: true,
    },
  ],
});

export const ColumnModel = mongoose.model(SchemaTitle.column, ColumnSchema);
