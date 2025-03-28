import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { ProjectRepository } from "../domain/repository/project_repository";

export const GetMyProjectsController = new Elysia().use(DIContainerPlugin).get(
  "/my-projects/:userId",
  async ({ container, params }) => {
    const { userId } = params;
    const projectRepository = container.get(ProjectRepository);
    const projects = await projectRepository.getMyProject(userId);
    return projects;
  },
  {
    params: t.Object({
      userId: t.String(),
    }),
  }
);
