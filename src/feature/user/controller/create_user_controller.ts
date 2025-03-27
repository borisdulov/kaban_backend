import { Elysia } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { UserRepository } from "../domain/repository/user_repository";
import { CreateUserValidation } from "../dto/create_user_dto";

export const CreateUserController = new Elysia().use(DIContainerPlugin).post(
  "/create",
  async ({ container, body }) => {
    const userRepository = container.get(UserRepository);
    const createdUser = await userRepository.createUser(body);
    return createdUser;
  },
  {
    body: CreateUserValidation,
  }
);
