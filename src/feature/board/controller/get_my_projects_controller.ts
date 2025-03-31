import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { BoardRepository } from "../domain/repository/board_repository";

export const GetMyProjectsController = new Elysia().use(DIContainerPlugin).get(
  "/my-projects/:userId",
  async ({ container, params }) => {
    const { userId } = params;
    const projectRepository = container.get(BoardRepository);
    const projects = await projectRepository.getMyBoards(userId);
    return projects;
  },
  {
    params: t.Object({
      userId: t.String(),
    }),
  }
);
