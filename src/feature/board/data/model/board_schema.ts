import mongoose, { Schema, SchemaType, model } from "mongoose";
import { ProjectPrivacy } from "../../domain/entity/board_privacy";
import { Board } from "../../domain/entity/board_entity";

const boardSchema = new Schema<Board>(
  {
    name: {
      type: String,
      required: true,
    },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    privacy: {
      type: String,
      enum: Object.values(ProjectPrivacy),
      default: ProjectPrivacy.Private,
    },
  },
  {
    timestamps: true,
  }
);

export const BoardModel = mongoose.model(SchemaTitle.board, boardSchema);
