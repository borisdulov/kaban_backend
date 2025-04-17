import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { ColumnRepository } from "../domain/repository/column_repository";

export const GetCategoryController = new Elysia().use(DIContainerPlugin).get(
  "/getColumn/:columnId",
  async ({ params, container }) => {
    const { columnId: _id } = params;
    const columnRepository = container.get(ColumnRepository);
    const column = await columnRepository.getColumnById(_id);
    return column;
  },
  {
    params: t.Object({
      columnId: t.String(),
    }),
  }
);
