import { Elysia } from "elysia";

export const GetMyTasksController = new Elysia().get(
  "/",
  async (request) => {},
  {
    detail: {
      description:
        "Получение пользователем задач, у которых он назначен исполнителем",
    },
  }
);
