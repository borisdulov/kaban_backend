import Elysia from "elysia";
import { CreateTaskController } from "./presentation/controller/create_task_controller";
import { DeleteTaskController } from "./presentation/controller/delete_task_controller";
import { GetTaskController } from "./presentation/controller/get_task_controller";
import { GetMyTasksController } from "./presentation/controller/get_my_tasks_controller";
import { UpdateTaskController } from "./presentation/controller/update_task_controller";

export const TaskGroup = new Elysia().group("/task", (app) =>
  app
    .use(CreateTaskController)
    .use(DeleteTaskController)
    .use(GetTaskController)
    .use(GetMyTasksController)
    .use(UpdateTaskController)
);
