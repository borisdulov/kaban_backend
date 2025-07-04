import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const CreateBoardController = new Elysia().use(DIContainerPlugin).post(
  "/create",
  async ({ container, body }) => {
    const boardRepo = container.get(BoardRepository);
    const createdProject = await boardRepo.createBoard({
      ...body,
      ownerId: "60e5f2a2b4d1c926f8e0a3c1",
    });
    return createdProject;
  },
  {
    body: t.Object({
      title: t.String(),
    }),
    detail: {
      description: "Создать доску",
    },
  }
);
