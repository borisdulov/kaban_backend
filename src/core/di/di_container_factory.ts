import { AddUsersToProjRepositoryImp } from "../../feature/project/data/repository/add_user_to_project_repository_imp";
import { CreateProjectRepositoryImp } from "../../feature/project/data/repository/create_project_repository_imp";
import { UserRepositoryImpl } from "../../feature/user/data/repository/user_repository_impl";
import { UserRepository } from "../../feature/user/domain/repository/user_repository";
import { DIContainer } from "./di_container";

export const createDIContainer = (): DIContainer => {
  const container = new DIContainer();

  const userRepository = new UserRepositoryImpl();
  container.put(UserRepository, userRepository);

  const addUsersToProjRepository = new AddUsersToProjRepositoryImp();
  container.put(AddUsersToProjRepositoryImp, addUsersToProjRepository)

  const createProjectRepository = new CreateProjectRepositoryImp()
  container.put(CreateProjectRepositoryImp, createProjectRepository)

  return container;
};
