import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { ProjectRepository } from "../domain/repository/project_repository";

export const DeleteProjectController = new Elysia().use(DIContainerPlugin).get(
  "/delete/:id",
  async ({ container, params }) => {
    const { id } = params;
    const projectRepository = container.get(ProjectRepository);
    const deletedProject = await projectRepository.Project(id);
    return deletedProject;
  },
  {
    params: t.Object({
      id: t.String(),
    }),
  }
);
