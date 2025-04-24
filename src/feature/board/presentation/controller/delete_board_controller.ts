import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const DeleteBoardController = new Elysia().use(DIContainerPlugin).get(
  "/delete/:boardId",
  async ({ container, params }) => {
    const { boardId: id } = params;
    const boardRepo = container.get(BoardRepository);
    const deletedBoard = await boardRepo.deleteBoard(id);
    return deletedBoard;
  },
  {
    params: t.Object({
      boardId: t.String(),
    }),
    detail: {
      description: "Удалить доску",
    },
  }
);
