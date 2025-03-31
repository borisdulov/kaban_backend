import { Elysia } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { BoardRepository } from "../domain/repository/board_repository";
import { CreateProjectValidation } from "../dto/request/create_project_dto";

export const CreateProjectController = new Elysia().use(DIContainerPlugin).post(
  "/create",
  async ({ container, body }) => {
    const projectRepository = container.get(BoardRepository);
    const createdProject = await projectRepository.createBoard(body);
    return createdProject;
  },
  {
    body: CreateProjectValidation,
  }
);
