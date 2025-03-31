import { Elysia } from "elysia";

export const GetCategoryTasks = new Elysia().get(
  "/:categoryId/tasks",
  async (request) => {
    return;
  },
  {
    detail: { description: "Получение всех задач в категории" },
  }
);
