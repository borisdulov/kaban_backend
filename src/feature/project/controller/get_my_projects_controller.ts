import { Elysia } from "elysia";

export const GetMyProjectsController = new Elysia().get(
  "/",
  async (request) => {},
  {
    detail: {
      description: "Получение пользователем проектов, в которых он состоит",
    },
  }
);
