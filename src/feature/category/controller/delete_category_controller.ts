import { Elysia } from "elysia";

export const DeleteCategoryController = new Elysia().get(
  "/:categoryId/delete",
  async (request) => {},
  {
    detail: { description: "Удаление категории по её id" },
  }
);
