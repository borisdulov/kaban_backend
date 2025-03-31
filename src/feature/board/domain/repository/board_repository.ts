import { Dependency } from "../../../../core/domain/entity/dependency";
import { CreateProjectDTO } from "../../dto/request/create_project_dto";
import { UpdateProjectDTO as UpdateBoardDTO } from "../../dto/request/update_project_dto";
import { Board } from "../entity/board_entity";

export abstract class BoardRepository extends Dependency {
  abstract createBoard(data: CreateProjectDTO): Promise<Board>;

  abstract getMyBoards(userId: string): Promise<Board[]>;

  abstract getBoard(boardId: string): Promise<Board>;

  abstract updateBoard(boardId: string, data: UpdateBoardDTO): Promise<Board>;

  abstract deleteBoard(boardId: string): Promise<Board>;

  abstract addUser(userId: string, boardId: string): Promise<Board>;

  abstract removeUser(userId: string, boardId: string): Promise<Board>;
}
