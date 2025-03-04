import { Elysia } from "elysia";

export const DeleteTaskController = new Elysia().get(
  "/:taskId",
  async (request) => {},
  {
    detail: { description: "Удаление задачи по её id" },
  }
);
