import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { ColumnRepository } from "../../domain/repository/column_repository";

export const GetColumnsByBoardController = new Elysia()
  .use(DIContainerPlugin)
  .get(
    "/getByBoard/:boardId",
    async ({ params, container }) => {
      const { boardId: _id } = params;
      const columnRepo = container.get(ColumnRepository);
      const column = await columnRepo.getColumnsByBoardId(_id);
      return column;
    },
    {
      params: t.Object({
        boardId: t.String(),
      }),
    }
  );
