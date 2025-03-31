import { Elysia } from "elysia";
import { CreateProjectController } from "../controller/create_project_controller";
import { DeleteProjectController } from "../controller/delete_project_controller";
import { GetProjectCategoriesController } from "../controller/get_project_categories_controller";
import { UpdateProjectController } from "../controller/update_project_controller";
import { GetMyProjectsController } from "../controller/get_my_projects_controller";
import { AddUsersToProjectController } from "../controller/add_users_to_project_controller";
import { RemoveUsersFromProjectController } from "../controller/remove_users_from_project_controller";
import { GetProjectByIdController } from "../controller/get_project_by_id_controller";

export const ProjectGroup = new Elysia().group("/project", (app) =>
  app
    .use(CreateProjectController)
    .use(DeleteProjectController)
    .use(GetProjectByIdController)
    .use(GetProjectCategoriesController)
    .use(UpdateProjectController)
    .use(GetMyProjectsController)
    .use(AddUsersToProjectController)
    .use(RemoveUsersFromProjectController)
);
