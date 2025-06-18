import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const AddUserToBoardController = new Elysia()
  .use(DIContainerPlugin)
  .post(
    "/addUser",
    async ({ container, body }) => {
      const { userId, boardId } = body;
      const boardRepo = container.get(BoardRepository);
      const updatedBoard = await boardRepo.addUsersToBoard(userId, boardId);
      return updatedBoard;
    },
    {
      body: t.Object({
        userId: t.String(),
        boardId: t.String(),
      }),
      detail: {
        description: "Добавить пользователя к доске",
      },
    }
  );
