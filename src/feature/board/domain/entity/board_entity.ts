import { Types } from "mongoose";
import { User } from "../../../user/domain/entity/user_entity";
import { ProjectPrivacy } from "./board_privacy";

export interface Board {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  owner: User;
  users: Types.ObjectId[] | User[];
  privacy: ProjectPrivacy;
}
