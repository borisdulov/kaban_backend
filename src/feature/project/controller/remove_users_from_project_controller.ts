import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { ProjectRepository } from "../domain/repository/project_repository";

export const RemoveUserFromProjectController = new Elysia()
  .use(DIContainerPlugin)
  .post(
    "/remove",
    async ({ container, body }) => {
      const { userId, projectId } = body;
      const projectRepository = container.get(ProjectRepository);
      const updatedProject = await projectRepository.removeUserFromProject(
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
