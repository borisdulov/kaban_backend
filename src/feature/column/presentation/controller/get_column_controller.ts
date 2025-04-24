import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { ColumnRepository } from "../../domain/repository/column_repository";

export const GetColumnController = new Elysia().use(DIContainerPlugin).get(
  "/getColumn/:columnId",
  async ({ params, container }) => {
    const { columnId: _id } = params;
    const columnRepo = container.get(ColumnRepository);
    const column = await columnRepo.getColumnById(_id);
    return column;
  },
  {
    params: t.Object({
      columnId: t.String(),
    }),
  }
);
