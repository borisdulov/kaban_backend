import { Elysia, t } from "elysia";
import { ColumnRepository } from "../../domain/repository/column_repository";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
export const GetColumnsByBoardController = new Elysia()
  .use(DIContainerPlugin)
  .get(
    "/getByBoard/:boardId",
    async ({ container, params }) => {
      const { boardId: _id } = params;
      const columnRepo = container.get(ColumnRepository);
      const columns = await columnRepo.getColumnsByBoardId(_id);
      return columns;
    },
    {
      params: t.Object({
        boardId: t.String(),
      }),
    }
  );
