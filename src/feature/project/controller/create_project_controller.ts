import { Elysia } from "elysia";

export const CreateProjectController = new Elysia().post(
  "/create",
  async (request) => {},
  {
    detail: { description: "Создание нового проекта" },
  }
);
