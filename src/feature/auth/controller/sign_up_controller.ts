import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { UserRepository } from "../../user/domain/repository/user_repository";

export const SignUpController = new Elysia().use(DIContainerPlugin).post(
  "/sign-up",
  async ({ container, body }) => {
    const userRepository = container.get(UserRepository);
    const createdUser = await userRepository.createUser(body);
    return createdUser;
  },
  {
    body: t.Object({
      username: t.String(),
      password: t.String(),
    }),
  }
);
