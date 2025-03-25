import { Elysia } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { ProjectRepository } from "../domain/repository/project_repository";
import { CreateProjectValidation } from "../dto/request/create_project_dto";

export const CreateProjectController = new Elysia().use(DIContainerPlugin).post(
  "/create",
  async ({ container, body }) => {
    const projectRepository = container.get(ProjectRepository);
    const createdProject = await projectRepository.createProject(body);
    return createdProject;
  },
  {
    body: CreateProjectValidation,
  }
);
