import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { UserRepository } from "../domain/repository/user_repository";

export const GetUserByUsernameController = new Elysia()
  .use(DIContainerPlugin)
  .get(
    "/getUserByUsername/:username",
    async ({ params, container }) => {
      const { username: username } = params;
      const userRepo = container.get(UserRepository);
      const user = await userRepo.findUserByUsername(username);
      return user;
    },
    {
      params: t.Object({
        username: t.String(),
      }),
      detail: {
        description: "Получить пользователя по нику",
      },
    }
  );
