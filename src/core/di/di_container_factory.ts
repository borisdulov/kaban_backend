import { ProjectRepositoryImpl } from "../../feature/project/data/repository/project_repository_impl";
import { ProjectRepository } from "../../feature/project/domain/repository/project_repository";
import { UserRepositoryImpl } from "../../feature/user/data/repository/user_repository_impl";
import { UserRepository } from "../../feature/user/domain/repository/user_repository";
import { DIContainer } from "./di_container";

export const createDIContainer = (): DIContainer => {
  const container = new DIContainer();

  const userRepository = new UserRepositoryImpl();
  container.put(UserRepository, userRepository);

  const projectRepository = new ProjectRepositoryImpl();
  container.put(ProjectRepository, projectRepository);
  return container;
};
