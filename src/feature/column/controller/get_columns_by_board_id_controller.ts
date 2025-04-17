import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { ColumnRepository } from "../domain/repository/column_repository";

export const GetColumnsByBoardController = new Elysia()
  .use(DIContainerPlugin)
  .get(
    "/getByBoard/:board",
    async ({ container, params }) => {
      const { board: _id } = params;
      const columnRepo = container.get(ColumnRepository);
      const columns = await columnRepo.getColumnsByBoardId(_id);
      return columns;
    },
    {
      params: t.Object({
        board: t.String(),
      }),
    }
  );
