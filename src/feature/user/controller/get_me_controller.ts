import { Elysia } from "elysia";
import { User } from "../data/model/user_model";
import { DIContainerPlugin } from "../../../core/di/di_container_plugin";
import { UserRepository } from "../domain/repository/user_repository";

export const GetMeController = new Elysia().use(DIContainerPlugin).get(
  "/",
  async ({ container }) => {
    // const userRepository = container.get(UserRepository);
    // userRepository.createUser();

    // const newUser = new User({ name: "asdf", email: "asdfsdf" });
//
    // await newUser.save();
    return "Jopa zalupa";
  },
  {
    detail: { description: "Получение пользователем данных о себе" },
  }
);
