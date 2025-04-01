import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const GetBoardByIdController = new Elysia().use(DIContainerPlugin).get(
  "/:boardId",
  async ({ params, container }) => {
    const { boardId: id } = params;
    const projectRepository = container.get(BoardRepository);
    const project = await projectRepository.getBoard(id);
    return project;
  },
  {
    params: t.Object({
      boardId: t.String(),
    }),
  }
);
