import { Elysia, t } from "elysia";
import { BoardRepository } from "../../domain/repository/board_repository";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { ProjectPrivacy } from "../../domain/entity/board_privacy";

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
      name: t.Optional(t.String()),
      description: t.Optional(t.String()),
      privacy: t.Optional(t.Enum(ProjectPrivacy)),
    }),

    detail: {
      description: "Обновление данных пользователя самим пользователем",
    },
  }
);
