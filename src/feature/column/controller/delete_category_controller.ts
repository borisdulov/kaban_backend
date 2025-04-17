import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { ColumnRepository } from "../domain/repository/column_repository";

export const DeleteCategoryController = new Elysia().use(DIContainerPlugin).get(
  "/delete/:columnId",
  async ({ container, params }) => {
    const { columnId: _id } = params;
    const columnRepository = container.get(ColumnRepository);
    const deletedColumn = await columnRepository.deleteColumn(_id);
    return deletedColumn;
  },
  {
    params: t.Object({
      columnId: t.String(),
    }),
  }
);
