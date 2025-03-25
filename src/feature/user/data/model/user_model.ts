import { Schema, model } from "mongoose";
//
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  login: {type: String, unique: true},
  username: {type: String, unique: true},
  bio: {type: String},
  avatar: {type: String},
  projectsIds: [{type: String}]
});

export const User = model("User", UserSchema);
