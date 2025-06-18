import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const GetMyBoardsController = new Elysia().use(DIContainerPlugin).get(
  "/",
  async ({ container }) => {
    const boardRepo = container.get(BoardRepository);
    const board = await boardRepo.getBoardsByUserId("60e5f2a2b4d1c926f8e0a3c1");
    return board;
  },
  {
    detail: {
      description: "Получение своих досок",
    },
  }
);
