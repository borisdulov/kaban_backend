import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { ColumnRepository } from "../../domain/repository/column_repository";

export const CreateCategoryController = new Elysia()
  .use(DIContainerPlugin)
  .post(
    "/create",
    async ({ container, body }) => {
      const columnRepo = container.get(ColumnRepository);
      const createdColumn = await columnRepo.createColumn(body);
      return createdColumn;
    },
    {
      body: t.Object({
        board: t.String(),
        name: t.String(),
      }),
    }
  );
