import Elysia from "elysia";
import { CreateCategoryController } from "./controller/create_category_controller";
import { DeleteCategoryController } from "./controller/delete_category_controller";
import { GetCategoryController } from "./controller/get_category_controller";
import { GetCategoryTasks } from "./controller/get_category_tasks_controller";
import { UpdateCategoryController } from "./controller/update_category_controller";
import { GetColumnsByBoardController } from "./controller/get_columns_by_board_id_controller";

export const CategoryGroup = new Elysia().group("/category", (app) =>
  app
    .use(CreateCategoryController)
    .use(DeleteCategoryController)
    .use(GetCategoryController)
    .use(GetCategoryTasks)
    .use(UpdateCategoryController)
    .use(GetColumnsByBoardController)
);
