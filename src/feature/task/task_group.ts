import Elysia from "elysia";
import { CreateTaskController } from "./presentation/controller/create_task_controller";
import { DeleteTaskController } from "./presentation/controller/delete_task_controller";
import { GetTaskController } from "./presentation/controller/get_task_controller";
import { UpdateTaskController } from "./presentation/controller/update_task_controller";
import { GiveTaskToUserController } from "./presentation/controller/give_task_to_user_controller";
import { MoveTaskController } from "./presentation/controller/move_task_controller";

export const TaskGroup = new Elysia().group("/task", (app) =>
  app
    .use(CreateTaskController)
    .use(DeleteTaskController)
    .use(GetTaskController)
    .use(UpdateTaskController)
    .use(GiveTaskToUserController)
    .use(MoveTaskController)
);
