import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const GetBoardByIdController = new Elysia().use(DIContainerPlugin).get(
  "/:boardId",
  async ({ params, container }) => {
    const { boardId: id } = params;
    const boardRepo = container.get(BoardRepository);
    const board = await boardRepo.getBoard(id);
    return board;
  },
  {
    params: t.Object({
      boardId: t.String(),
    }),
    detail: {
      description: "Получить доску по айди",
    },
  }
);
