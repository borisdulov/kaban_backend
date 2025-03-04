import { Elysia } from "elysia";

export const UpdateProjectController = new Elysia().post(
  "/:projectId/update",
  async (request) => {},
  {
    detail: { description: "Обновление данных о проекте по его id" },
  }
);
