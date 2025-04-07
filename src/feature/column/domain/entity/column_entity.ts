import { Types } from "mongoose";
import { Board } from "../../../board/domain/entity/board_entity";
import { Task } from "../../../task/domain/entity/task_entity";

export interface Column {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  color: String;
  board: Types.ObjectId | Board;
  tasks: Types.ObjectId[] | Task[];
}
