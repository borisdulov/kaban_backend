import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";
import { ProjectPrivacy } from "../../domain/entity/board_privacy";

export const CreateBoardController = new Elysia().use(DIContainerPlugin).post(
  "/create",
  async ({ container, body }) => {
    const boardRepo = container.get(BoardRepository);
    const createdProject = await boardRepo.createBoard({ ...body, owner: "1" });
    return createdProject;
  },
  {
    body: t.Object({
      name: t.String(),
      description: t.Optional(t.String()),
      privacy: t.Optional(t.Enum(ProjectPrivacy)),
    }),
  }
);
