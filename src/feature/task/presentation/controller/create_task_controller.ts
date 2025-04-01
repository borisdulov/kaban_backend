import { Elysia } from "elysia";

export const CreateTaskController = new Elysia().post(
  "/create",
  async (request) => {},
  {
    detail: { description: "Создание новой задачи" },
  }
);
