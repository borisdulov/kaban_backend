import { Elysia, t } from "elysia";
import { ProjectRepository } from "../domain/repository/project_repository";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { UpdateProjectValidation } from "../dto/request/update_project_dto";
import { ProjectResponseValidation } from "../dto/response/project_response";

//export const UpdateProjectController = new Elysia().use(DIContainerPlugin).post(
//  "/update/:projectId",
//  async ({ container, body, project}) => {
//    const projectRepository = container.get(ProjectRepository);
//    const updatedProject = await projectRepository.updateProject(project.projectId, body);
//    return updatedProject;
//  },
//  {
//    body: UpdateProjectValidation,
//    response: ProjectResponseValidation,
//    detail: {
//      description: "Обновление данных пользователя самим пользователем",
//    },
//  }
//);
