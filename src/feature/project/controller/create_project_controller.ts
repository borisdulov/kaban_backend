import { Elysia } from "elysia";
import { CreateProjectValidation } from "../dto/request/create_project_request";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { CreateProjectRepositoryImp } from "../data/repository/create_project_repository_imp";

export const CreateProjectController = new Elysia().use(DIContainerPlugin).post(
  "/create",
  async ({container, body}) => {
    const createProjectRepositoryImp = container.get(CreateProjectRepositoryImp)
    const createdProject = await createProjectRepositoryImp.createProject(body);
    return createdProject;
  },
  {
    body: CreateProjectValidation
  },
);
