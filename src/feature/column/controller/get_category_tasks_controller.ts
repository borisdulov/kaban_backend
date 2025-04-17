import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { ColumnRepository } from "../domain/repository/column_repository";

export const GetCategoryTasks = new Elysia().use(DIContainerPlugin).get(
  "/findTasks/:columnId",
  async ({ container, params }) => {
    const { columnId: _id } = params;
    const columnRepo = container.get(ColumnRepository);
    const tasks = await columnRepo.getTasksByColumnId(_id);
    return tasks;
  },
  {
    params: t.Object({
      columnId: t.String(),
    }),
  }
);
