import Elysia from "elysia";
import { CreateTaskController } from "./controller/create_task_controller";
import { DeleteTaskController } from "./controller/delete_task_controller";
import { GetTaskController } from "./controller/get_task_controller";
import { GetMyTasksController } from "./controller/get_my_tasks_controller";
import { UpdateTaskController } from "./controller/update_task_controller";

export const TaskGroup = new Elysia().group("/task", (app) =>
  app
    .use(CreateTaskController)
    .use(DeleteTaskController)
    .use(GetTaskController)
    .use(GetMyTasksController)
    .use(UpdateTaskController)
);
