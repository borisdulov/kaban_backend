import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { ColumnRepository } from "../domain/repository/column_repository";

export const UpdateCategoryController = new Elysia()
  .use(DIContainerPlugin)
  .post(
    "/update",
    async ({ container, body }) => {
      const columnRepo = container.get(ColumnRepository);
      const updatedColumn = await columnRepo.updateColumn(body);
      return updatedColumn;
    },
    {
      body: t.Object({
        columnId: t.String(),
        name: t.Optional(t.String()),
        color: t.Optional(t.String()),
      }),
    }
  );
