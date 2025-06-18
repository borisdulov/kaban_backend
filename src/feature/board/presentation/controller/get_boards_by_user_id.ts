import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const GetBoardsByUserIdController = new Elysia()
  .use(DIContainerPlugin)
  .get(
    "/getBoards/:userId",
    async ({ params, container }) => {
      const { userId: id } = params;
      const boardRepo = container.get(BoardRepository);
      const boards = await boardRepo.getBoardsByUserId(id);
      return boards;
    },
    {
      params: t.Object({
        userId: t.String(),
      }),
      detail: {
        description: "Получить доски по айди пользователя",
      },
    }
  );
