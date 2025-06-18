import { Dependency } from "../../../../core/domain/entity/dependency";
import { CreateBoardDTO } from "../../dto/create_board_dto";
import { UpdateBoardDTO } from "../../dto/update_board_dto";
import { Board } from "../entity/board_entity";

export abstract class BoardRepository extends Dependency {
  abstract createBoard(dto: CreateBoardDTO): Promise<Board>;

  abstract getBoardsByUserId(userId: string): Promise<Board[]>;

  abstract getBoard(boardId: string): Promise<Board>;

  abstract updateBoard(dto: UpdateBoardDTO): Promise<Board>;

  abstract deleteBoard(boardId: string): Promise<Board>;

  abstract addUsersToBoard(userId: string, boardId: string): Promise<Board>;

  abstract removeUserFromBoard(userId: string, boardId: string): Promise<Board>;
}
