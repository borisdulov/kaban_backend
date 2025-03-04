import { Elysia } from "elysia";

export const GetTaskController = new Elysia().get(
  "/:taskId",
  async (request) => {},
  {
    detail: { description: "Получение задачи по её id" },
  }
);
