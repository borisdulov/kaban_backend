import { Schema, model } from "mongoose";
import { User } from "../../domain/entity/user_entity";

const UserSchema = new Schema<User>({
  _id: { type: String, required: true },
  name: { type: String, required: false },
  email: { type: String, unique: true },
  login: { type: String, unique: true },
  username: { type: String, unique: true },
  bio: { type: String },
  avatar: { type: String },
  projectsIds: [{ type: String }],
});

export const UserModel = model("User", UserSchema);
