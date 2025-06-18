import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { UserRepository } from "../domain/repository/user_repository";

export const GetUserController = new Elysia().use(DIContainerPlugin).get(
  "/getUser/:userId",
  async ({ params, container }) => {
    const { userId: id } = params;
    const userRepo = container.get(UserRepository);
    const user = await userRepo.getUser(id);
    return user;
  },
  {
    params: t.Object({
      userId: t.String(),
    }),
    detail: {
      description: "Получить пользователя по айди",
    },
  }
);
