import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { BoardRepository } from "../../domain/repository/board_repository";

export const GetMyBoardsController = new Elysia().use(DIContainerPlugin).get(
  "/",
  async ({ container }) => {
    const projectRepository = container.get(BoardRepository);
    const projects = await projectRepository.getBoardsByUserId("1");
    return projects;
  },
  {
    detail: {
      description: "Получение своих досок",
    },
  }
);
