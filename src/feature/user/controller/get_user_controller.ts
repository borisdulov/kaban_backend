import { Elysia } from "elysia";

export const GetUserController = new Elysia().get(
  "/:userId",
  async (request) => {},
  {
    detail: { description: "Получение данных о пользователе" },
  }
);
