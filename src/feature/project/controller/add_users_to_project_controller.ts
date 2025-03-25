import { Elysia } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { AddUsersToProjRepositoryImp } from "../data/repository/add_user_to_project_repository_imp";

export const AddUsersToProjectController = new Elysia().use(DIContainerPlugin).post(
  "/:projectId/users/:userId/add",
  async ({container, params}) => {
    const addUsersToProjRepository = container.get(AddUsersToProjRepositoryImp)
    const { projectId, userId } = params;
    const success = await addUsersToProjRepository.addUserToProject(projectId, userId);
    if (success) {
      return { message: "User added to project successfully" };
    } else {
      return { error: "Failed to add user to project" };
    }
  },
  {
    detail: { description: "Добавление пользователей в проект" },
  }
);
