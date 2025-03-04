import { Elysia } from "elysia";

export const DeleteProjectController = new Elysia().get(
  "/:projectId/delete",
  async (request) => {},
  {
    detail: { description: "Удаление проекта по его id" },
  }
);
