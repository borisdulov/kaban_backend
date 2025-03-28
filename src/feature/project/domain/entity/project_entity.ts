import { Types } from "mongoose";
import { User } from "../../../user/domain/entity/user_entity";
import { ProjectPrivacy } from "./project_privacy_enum";

export interface Project {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  owner: User;
  members: Types.ObjectId[] | User[];
  privacy: ProjectPrivacy;
  __v?: number;
}
