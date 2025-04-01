import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const RemoveUserFromBoardController = new Elysia()
  .use(DIContainerPlugin)
  .post(
    "/remove-users",
    async ({ container, body }) => {
      const { userId, projectId } = body;
      const projectRepository = container.get(BoardRepository);
      const updatedProject = await projectRepository.removeUserFromBoard(
        userId,
        projectId
      );
      return updatedProject;
    },
    {
      body: t.Object({
        userId: t.String(),
        projectId: t.String(),
      }),
    }
  );
