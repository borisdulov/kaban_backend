import Elysia from "elysia";
import { CreateColumnController } from "../controller/create_column_controller";
import { DeleteColumnController } from "../controller/delete_column_controller";
import { GetColumnController } from "../controller/get_column_controller";
import { GetColumnTasks } from "../controller/get_column_tasks_controller";
import { UpdateColumnController } from "../controller/update_column_controller";

export const ColumnGroup = new Elysia().group("/column", (app) =>
  app
    .use(CreateColumnController)
    .use(DeleteColumnController)
    .use(GetColumnController)
    .use(GetColumnTasks)
    .use(UpdateColumnController)
);
