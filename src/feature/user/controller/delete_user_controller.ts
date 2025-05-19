import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { UserRepository } from "../domain/repository/user_repository";

export const DeleteUserController = new Elysia().use(DIContainerPlugin).get(
  "/delete/:userId",
  async ({ container, params }) => {
    const { userId: id } = params;
    const userRepo = container.get(UserRepository);
    const deletedUser = await userRepo.deleteUser(id);
    return deletedUser;
  },
  {
    params: t.Object({
      userId: t.String(),
    }),
    detail: {
      description: "Удалить пользователя",
    },
  }
);
