import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { UserRepository } from "../domain/repository/user_repository";

export const CreateUserController = new Elysia().use(DIContainerPlugin).post(
  "/create",
  async ({ container, body }) => {
    const userRepo = container.get(UserRepository);
    const createdUser = await userRepo.createUser({
      ...body,
    });
    return createdUser;
  },
  {
    body: t.Object({
      username: t.String(),
      password: t.String(),
    }),
    detail: {
      description: "Создать пользователя",
    },
  }
);
