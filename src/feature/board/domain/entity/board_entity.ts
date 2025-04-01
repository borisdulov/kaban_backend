import { Types } from "mongoose";
import { User } from "../../../user/domain/entity/user_entity";
import { ProjectPrivacy } from "./board_privacy";
import { Column } from "../../../column/domain/entity/column_entity";

export interface Board {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  owner: User;
  users: Types.ObjectId[] | User[];
  privacy: ProjectPrivacy;
  columns: Types.ObjectId[] | Column[];
}
