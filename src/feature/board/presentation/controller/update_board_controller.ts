import { Elysia, t } from "elysia";
import { BoardRepository } from "../../domain/repository/board_repository";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";

export const UpdateBoardController = new Elysia().use(DIContainerPlugin).post(
  "/update",
  async ({ container, body }) => {
    const boardRepo = container.get(BoardRepository);
    const updatedProject = await boardRepo.updateBoard(body);
    return updatedProject;
  },
  {
    body: t.Object({
      boardId: t.String(),
      title: t.Optional(t.String()),
    }),

    detail: {
      description: "Обновление данных пользователя самим пользователем",
    },
  }
);
