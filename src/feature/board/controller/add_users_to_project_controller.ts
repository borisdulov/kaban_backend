import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { BoardRepository } from "../domain/repository/board_repository";

export const AddUsersToProjectController = new Elysia()
  .use(DIContainerPlugin)
  .post(
    "/add",
    async ({ container, body }) => {
      const { userId, projectId } = body;
      const projectRepository = container.get(BoardRepository);
      const updatedProject = await projectRepository.addUser(userId, projectId);
      return updatedProject;
    },
    {
      body: t.Object({
        userId: t.String(),
        projectId: t.String(),
      }),
    }
  );
