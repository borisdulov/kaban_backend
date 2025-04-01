import mongoose, { Schema } from "mongoose";
import { Column } from "../../domain/entity/column_entity";
import { SchemaTitle } from "../../../../core/constant/schema_title";

const ColumnSchema = new Schema<Column>({
  name: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  board: {
    type: Schema.Types.ObjectId,
    ref: SchemaTitle.board,
    required: true,
  },
  // tasks: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "User",
  //     required: true,
  //   },
  // ],
});

ColumnSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export const ColumnModel = mongoose.model(SchemaTitle.column, ColumnSchema);
