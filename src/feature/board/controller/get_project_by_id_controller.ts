import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { BoardRepository } from "../domain/repository/board_repository";

export const GetProjectByIdController = new Elysia().use(DIContainerPlugin).get(
  "/getProject/:id",
  async ({ params, container }) => {
    const { id } = params;
    const projectRepository = container.get(BoardRepository);
    const project = await projectRepository.getBoard(id);
    return project;
  },
  {
    params: t.Object({
      id: t.String(),
    }),
  }
);
