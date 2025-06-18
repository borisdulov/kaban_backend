import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { UserRepository } from "../domain/repository/user_repository";

export const UpdateUserController = new Elysia().use(DIContainerPlugin).post(
  "/update",
  async ({ container, body }) => {
    const userRepo = container.get(UserRepository);
    const updatedUser = await userRepo.updateUser(body);
    return updatedUser;
  },
  {
    body: t.Object({
      userId: t.String(),
      username: t.String(),
      password: t.Optional(t.String()),
    }),

    detail: {
      description: "Обновление данных пользователя самим пользователем",
    },
  }
);
