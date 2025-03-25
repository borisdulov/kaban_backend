import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { ProjectRepository } from "../domain/repository/project_repository";

export const GetProjectByIdController = new Elysia().use(DIContainerPlugin).get(
  "/getProject/:id",
  async ({ params, container }) => {
    const { id } = params;
    const projectRepository = container.get(ProjectRepository);
    const project = await projectRepository.getProjectById(id);
    return project;
  },
  {
    params: t.Object({
      id: t.String(),
    }),
  }
);
