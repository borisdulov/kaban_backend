import { Types } from "mongoose";
import { Board } from "../../../board/domain/entity/board_entity";

export interface Column {
  _id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  color: String;
  board: Types.ObjectId | Board;
  // tasks: Types.ObjectId[] | Tasks[];
}
