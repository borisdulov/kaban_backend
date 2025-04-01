import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const DeleteBoardController = new Elysia().use(DIContainerPlugin).get(
  "/delete/:boardId",
  async ({ container, params }) => {
    const { boardId: id } = params;
    const projectRepository = container.get(BoardRepository);
    const deletedProject = await projectRepository.deleteBoard(id);
    return deletedProject;
  },
  {
    params: t.Object({
      boardId: t.String(),
    }),
  }
);
