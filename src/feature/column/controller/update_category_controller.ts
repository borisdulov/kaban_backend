import { Elysia } from "elysia";

export const UpdateCategoryController = new Elysia().post(
  "/:categoryId/update",
  async (request) => {},
  {
    detail: { description: "Обновление данных категории по её id" },
  }
);
