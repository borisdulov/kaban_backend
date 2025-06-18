import mongoose, { Schema } from "mongoose";
import { Board } from "../../domain/entity/board_entity";
import { SchemaTitle } from "../../../../core/constant/schema_title";

const BoardSchema = new Schema<Board>({
  title: {
    type: String,
    required: true,
  },
  ownerId: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: SchemaTitle.user,
    required: true,
  },
  usersId: [
    {
      type: String,
    },
  ],
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: SchemaTitle.user,
      required: true,
    },
  ],
  columnsId: [
    {
      type: String,
      required: true,
    },
  ],
  columns: [
    {
      type: Schema.Types.ObjectId,
      ref: SchemaTitle.column,
    },
  ],
});

export const BoardModel = mongoose.model(SchemaTitle.board, BoardSchema);
