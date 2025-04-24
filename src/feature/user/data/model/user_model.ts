import mongoose, { Schema, model } from "mongoose";
import { User } from "../../domain/entity/user_entity";
import { SchemaTitle } from "../../../../core/constant/schema_title";

const UserSchema = new Schema<User>({
  _id: { type: String, required: true },
  password: { type: String },
  username: { type: String, unique: true },
  boardsIds: [{ type: String }],
  boards: [
    { type: Schema.Types.ObjectId, ref: SchemaTitle.board, required: true },
  ],
});

export const UserModel = model("User", UserSchema);
