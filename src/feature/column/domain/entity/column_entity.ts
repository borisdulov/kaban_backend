import { Board } from "../../../board/domain/entity/board_entity";
import { Task } from "../../../task/domain/entity/task_entity";

export interface Column {
  _id: string;
  title: string;
  color: String;
  boardId: String;
  board: Board;
  tasksId: String[];
  tasks: Task[];
}
