import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const AddUserToBoardController = new Elysia()
  .use(DIContainerPlugin)
  .post(
    "/add-users",
    async ({ container, body }) => {
      const { userId, projectId } = body;
      const boardRepo = container.get(BoardRepository);
      const updatedProject = await boardRepo.addUsersToBoard(userId, projectId);
      return updatedProject;
    },
    {
      body: t.Object({
        userId: t.String(),
        projectId: t.String(),
      }),
    }
  );
