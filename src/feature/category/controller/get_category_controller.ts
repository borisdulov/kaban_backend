import { Elysia } from "elysia";

export const GetCategoryController = new Elysia().get(
  "/:categoryId",
  async (request) => {
    return;
  },
  {
    detail: { description: "Получение категории по её id" },
  }
);
