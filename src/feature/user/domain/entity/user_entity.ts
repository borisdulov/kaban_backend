import { Board } from "../../../board/domain/entity/board_entity";

export interface User {
  _id: string;
  password: string;
  username: string;
  boardsIds: string[];
  boards: Board[];
}
