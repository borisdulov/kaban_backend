import { Elysia } from "elysia";

export const UpdateTaskController = new Elysia().post(
  "/:taskId/update",
  async (request) => {},
  {
    detail: { description: "Обновление данных задачи по её id" },
  }
);
