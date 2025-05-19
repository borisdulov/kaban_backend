import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const RemoveUserFromBoardController = new Elysia()
  .use(DIContainerPlugin)
  .post(
    "/removeUser",
    async ({ container, body }) => {
      const { userId, boardId } = body;
      const boardRepo = container.get(BoardRepository);
      const updatedBoard = await boardRepo.removeUserFromBoard(userId, boardId);
      return updatedBoard;
    },
    {
      body: t.Object({
        userId: t.String(),
        boardId: t.String(),
      }),
      detail: {
        description: "Удалить пользователя с доски",
      },
    }
  );
