import { Elysia } from "elysia";
import { CreateBoardController } from "../controller/create_board_controller";
import { DeleteBoardController } from "../controller/delete_board_controller";
import { GetMyBoardsController } from "../controller/get_my_boards_controller";
import { AddUserToBoardController } from "../controller/add_user_to_board_controller";
import { GetBoardByIdController } from "../controller/get_board_by_id_controller";
import { RemoveUserFromBoardController } from "../controller/remove_users_from_board_controller";

export const BoardGroup = new Elysia().group("/board", (app) =>
  app
    .use(CreateBoardController)
    .use(DeleteBoardController)
    .use(GetBoardByIdController)
    .use(GetMyBoardsController)
    .use(GetMyBoardsController)
    .use(AddUserToBoardController)
    .use(RemoveUserFromBoardController)
);
