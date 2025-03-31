import { Elysia } from "elysia";

export const GetProjectCategoriesController = new Elysia().get(
  "/:projectId/categories",
  async (request) => {},
  {
    detail: { description: "Получение категорий проекта по его id" },
  }
);
