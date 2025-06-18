import { Elysia, t } from "elysia";
import { DIContainerPlugin } from "../../../../core/di/di_container_plugin";
import { UserRepository } from "../../../user/domain/repository/user_repository";
import { AppError } from "../../../../core/error/app_error";

export const SignUpController = new Elysia().use(DIContainerPlugin).post(
  "/sign-up",
  async ({ container, body }) => {
    const userRepository = container.get(UserRepository);

    const findedUser = userRepository.findUserByUsername(body.username);
    if (findedUser != null) throw AppError.USERNAME_OCCUPIED;

    const password = await Bun.password.hash(body.password, {
      algorithm: "bcrypt",
      cost: 10,
    });

    const createdUser = await userRepository.createUser({ ...body, password });
    return createdUser;
  },
  {
    body: t.Object({
      username: t.String(),
      password: t.String(),
    }),
  }
);
