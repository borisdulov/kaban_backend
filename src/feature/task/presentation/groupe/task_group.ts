import Elysia from "elysia";
import { CreateTaskController } from "../controller/create_task_controller";
import { DeleteTaskController } from "../controller/delete_task_controller";
import { GetTaskController } from "../controller/get_task_controller";
import { GiveTaskToUserController } from "../controller/give_task_to_user_controller";
import { MoveTaskController } from "../controller/move_task_controller";
import { UpdateTaskController } from "../controller/update_task_controller";

export const TaskGroup = new Elysia().group("/task", (app) =>
  app
    .use(CreateTaskController)
    .use(DeleteTaskController)
    .use(GetTaskController)
    .use(UpdateTaskController)
    .use(GiveTaskToUserController)
    .use(MoveTaskController)
);
