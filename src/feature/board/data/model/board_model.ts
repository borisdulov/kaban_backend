import mongoose, { Schema, SchemaType } from "mongoose";
import { ProjectPrivacy } from "../../domain/entity/board_privacy";
import { Board } from "../../domain/entity/board_entity";
import { SchemaTitle } from "../../../../core/constant/schema_title";

const BoardSchema = new Schema<Board>(
  {
    _id: { type: String, required: true },
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    owner: {
      type: Schema.Types.ObjectId,
      ref: SchemaTitle.user,
      required: true,
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: SchemaTitle.user,
        required: true,
      },
    ],
    privacy: {
      type: String,
      enum: Object.values(ProjectPrivacy),
      default: ProjectPrivacy.Private,
    },
    columns: [
      {
        type: Schema.Types.ObjectId,
        ref: SchemaTitle.column,
      },
    ],
  },
  {
    timestamps: true,
  }
);

BoardSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export const BoardModel = mongoose.model(SchemaTitle.board, BoardSchema);
