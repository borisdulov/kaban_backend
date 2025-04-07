import { BoardRepositoryImpl } from "../../feature/board/data/repository/board_repository_impl";
import { BoardRepository } from "../../feature/board/domain/repository/board_repository";
import { TaskRepositoryImpl } from "../../feature/task/data/repository/task_repository_impl";
import { TaskRepository } from "../../feature/task/domain/repository/task_repository";
import { UserRepositoryImpl } from "../../feature/user/data/repository/user_repository_impl";
import { UserRepository } from "../../feature/user/domain/repository/user_repository";
import { DIContainer } from "./di_container";

export const createDIContainer = (): DIContainer => {
  const container = new DIContainer();

  const userRepository = new UserRepositoryImpl();
  container.put(UserRepository, userRepository);

  const projectRepository = new BoardRepositoryImpl();
  container.put(BoardRepository, projectRepository);

  const taskRepository = new TaskRepositoryImpl();
  container.put(TaskRepository, taskRepository);

  return container;
};
