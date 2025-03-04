import { Elysia } from "elysia";

export const GetProjectController = new Elysia().get(
  "/:projectId",
  async (request) => {},
  {
    detail: { description: "Получение проекта по его id" },
  }
);
