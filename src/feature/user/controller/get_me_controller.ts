import { Elysia } from "elysia";
import { User } from "../data/model/user_model";

export const GetMeController = new Elysia().get(
  "/",
  async (request) => {
    const newUser = new User({ name: "asdf", email: "asdfsdf" });

    await newUser.save();
    return "Jopa zalupa";
  },
  {
    detail: { description: "Получение пользователем данных о себе" },
  }
);
